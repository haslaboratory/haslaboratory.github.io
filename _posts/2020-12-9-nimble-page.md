---
layout: post
title: Nimble Page Management for Tiered Memory Systems
author: Weizhou Huang
tags:
 - 2019
 - ASPLOS
 - Virtual memory
 - Huge pages
---

# [Nimble Page Management for Tiered Memory Systems](http://www.cs.yale.edu/homes/abhishek/ziyan-asplos19.pdf)

本文实现了在异构内存系统中并发迁移物理大页的机制。 

## 背景和问题：

现代内存系统结合了新兴技术的最佳特性，这些技术可以针对延迟、带宽、容量或成本进行优化，使得基于操作系统换页机制的异构内存系统能够有效提升性能并降低成本。
如图1所示，这是一个异构内存系统的抽像图，由一个计算节点（包含CPU,GPU等）连接到不同性能和容量的内存节点。为了达到最佳的性能通常需要将热数据放到快速内存节点，冷数据放到慢速内存节点。
因此，操作系统需要完成关键的数据迁移功能，即页管理和迁移。Linux依赖于autoNUMA公平分配NUMA加点之间的计算和内存资源。

现代操作系统已经支持NUMA感知（通过使用autoNUMA），即操作系统能够知道异构内存的延时，带宽等特性，如图2所示，内存管理策略可能受到内核，设备驱动，应用程序等的影响，而执行页迁移的功能则只由内核管理，页迁移可以细分为右边框图中的5个步骤，1245步用来保证正确性和安全性，只有第3步实际执行页迁移/拷贝。

**问题在于**，依赖于昂贵的内存和磁盘之间的页交换来完成异构内存系统中的冷热数据迁移；
此外，大页映射的物理页也不能直接迁移，而是需要分散成4KB基础页再进行迁移，而且现有内存管理机制中如页拷贝等过程是单线程的，意味着无法利用多线程硬件以充分利用内存带宽。


<center>

<img src="../images/nimble-page-异构内存.png" width="60%" />

图 1 未来异构内存系统

</center> 



<center>

<img src="../images/nimble-page-步骤.png" width="60%" />

图 2 页迁移过程分解 

</center> 




## 设计：

**设计思想：**
利用现有内核的一些数据结构，在无额外开销的条件下，实现高并发的大页迁移。








## 实验： 
基于现有Linux内核实现

[源码链接](https://github.com/ysarch-lab/nimble_page_management_asplos_2019)


