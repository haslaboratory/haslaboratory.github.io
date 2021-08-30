---
layout: post
title: "Acclaim: 手机系统中的自适应内存回收"
author: Aoxin Wei
tags:
 - ATC
 - 2018
 - IO
 - Mobile
---

# [FastTrack: Foreground App-Aware I/O Management for Improving User Experience of Android Smartphones]()

## introduction

智能手机是一个以互动为导向的设备，用户对于前端的应用延迟的感知非常敏感，安卓会将前台应用与后台应用区分开来。之前的做法是给前台应用分配更多的CPU核心，然后让后台应用与其他应用共享剩下的CPU资源

但是随着手机中CPU核心数以及内存容量的增加，越来越多的后台应用会同时运行，会出现一个I/O倒挂的问题，前台应用的I/O会被大量的后台应用的I/O所阻塞，本文作者观察到这个现象非常的普遍

在研究了安卓/Linux 块层 的完整I/O路径之后根据实验的结果前台应用响应延迟增加的问题是**I/O优先级在page cache以及flash设备中的倒挂所导致的。**

**还有就是page cache flush没有区分数据页到底是来自于前台应用还是后台应用**



现有的工作存在的问题：

1.所需要的延迟太高了

2.缺乏整体性的设计，从block layer到存储设备



FastTrack的做法

1.暂停后台应用

2.在page cache中优先替换后台应用



## BG（后台应用） I/O对于用户体验的影响

浏览器 聊天工具 游戏等作为前台应用 云服务作为后台应用

测试前台app的launch time, switch time, loading time（例如游戏在启动后还需要加载一些文件）被后台I/O的影响

Update指的是后台下载应用，backup指的是后台云服务的刷新
![image](/images/2021-08-28-FastTrack%20Foreground%20App-Aware%20IO%20Management/fig1.png)

其次测试了前台I/O被阻塞的比率，越接近1代表没有被阻塞
![image](/images/2021-08-28-FastTrack%20Foreground%20App-Aware%20IO%20Management/fig2.png)

上述的结果可以证明前台应用I/O被后台I/O阻塞
### 用户感知到的前台应用延时的原因

### Overview of Android I/O Stack

使用IOPro去测试各个阶段的延迟

![image](/images/2021-08-28-FastTrack%20Foreground%20App-Aware%20IO%20Management/fig3.png)

结果表明主要的延迟增长来自于page cache以及存储设备，块层的增长可以忽略不记

原因：

1.page分配阶段：当不存在空闲页时需要将脏页下刷到设备，即回写BG应用
脏页阻塞FG应用

2.page替换：后台应用的page降低了前台应用的局部性

3.存储设备中的I/O调度：

存储设备中是读优先调度， 但是没有分辨前后台I/O请求，前台写会被后台读阻塞



## FastTrack的设计实现

需要解决以下三个问题

1.怎么去在内核中分辨前台和后台的I/O

2.怎么快速抢占BG的I/O

3.如何消除这样一个前台优先I/O带来的影响



设计分为五个部分

App Status Detector

Page Allocator

Page Reclaimer

I/O Dispatcher

Device I/O Scheduler



### App Status Detector

维护一张UID（对于每个应用是唯一的）到PID、TID的表，用以查询是否是前台应用

### Page Allocator

核心思路就是前台应用的I/O在分配时抢占后台应用的的分配

![image](/images/2021-08-28-FastTrack%20Foreground%20App-Aware%20IO%20Management/fig8.png)

修改了 alloc pages(), do generic file read(), and generic perform write(). 在每个函数的结尾去判断是否存在前台I/O，有就去处理前台I/O



这样也会带来一定的问题：关键的后台应用I/O被前台应用I/O抢占反而导致前台应用无法工作，所以在抢占前需要去检查后台的I/O是不是后台服务，是的化就不进行抢占。

还有就是存在“atomic context”发出的I/O分配，这种请求是不能被抢占的

 atomic context的概念：https://nanxiao.me/linux-kernel-note-51-atomic-context/

### Page Reclaimer

防止前台应用在内核中的页被回收

重新定义了回收的页的优先级

 BG clean pages (highest) > BG dirty pages (high) > FG clean pages (low) > FG dirty pages
(lowest).
### I/O Dispatcher

在块层中查找来自前台的I/O直接发给存储设备

同步BIOS使用 PID查找，异步BIOS使用LBA进行查找

### Device I/O Scheduler

在SCSI的reserved opcode中增加一位用来标识是否时前台应用的请求，设备的调度器可以根据这个更改优先级，重新设计的优先级如下

 the highest priority to FG reads, followed by FG writes and BG reads. BG writes are assigned to the lowest priority.