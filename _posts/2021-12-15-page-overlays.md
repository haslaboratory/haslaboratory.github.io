---
layout: post
title: "Page Overlays: 利用蒙层/叠层页追踪细粒度内存更新"
author: Jian Zhou
issue: 66
tags:
 - ISCA
 - 2015
 - Virtual Memory
---

这篇[Page Overlays](https://www.cs.cmu.edu/~gpekhime/Papers/PageOverlays-isca15.pdf)是[Onur Mutlu组](https://people.inf.ethz.ch/omutlu/)的[学生](http://www.cs.cmu.edu/~vseshadr/)在CMU的工作，发表于2015年的ISCA。

虚拟内存是现代计算机中非常重要的发明，支撑了物理内存管理、进程隔离、数据共享等操作系统核心功能。同时基于虚拟内存的写时复制和[页交换](https://docs.oracle.com/javase/tutorial/extra/fullscreen/doublebuf.html)等技术也为相关应用提供了极大的加速。但是当应用的更新粒度较小时，以更细粒度进行虚拟内存管理会带来很大的管理开销。包括细粒度重删、细粒度数据保护、缓存行粒度数据压缩和细粒度元数据管理在内，并不适合采用更细粒度的映射表。

这里在2015年所指出的几种类型的细粒度内存管理，在后续数年频繁出现于体系结构四大顶会中。例如，[In-Cache-Line Logging (ASPLOS 2019)](/2021/11/07/In-Line-Cache.html)、[Byte-Granular Memory Blacklisting (Micro 2019)](http://www.cs.columbia.edu/~simha/preprint_micro19_califorms.pdf)。

正如下图所示，如果可以细粒度跟踪被更新的缓存行，**写时复制**就可以用**写时蒙层**代替。

{% include image.html src="efficient-cow.jpg" width="360px" %}

在**写时蒙层**中我们需要做两件事：

1. 除了页表映射，增加虚拟内存至蒙层页的映射。
2. 跟踪被修改的缓存行。

## 蒙层映射

蒙层映射可以选择和虚拟内存映射结合，扩展虚拟内存以增加额外的映射关系，使原来的一对一映射变成一对多。[SSP (MICRO 2019)](https://cseweb.ucsd.edu/~jzhao/files/ssp-micro2019.pdf)就是这样做的。但是会对整个架构带来很大的变化。另一个选择就是使用独立的蒙层地址空间，这需要实现两次转换：1）虚拟地址至蒙层地址；2）蒙层地址至物理地址。第一次转换可以用虚拟地址直接用下图的方法计算得到蒙层地址。然后在内存独立区域维护一个硬件管理的蒙层映射表（Overlay Mapping Table (OMT)），转换为物理地址。

{% include image.html src="virtual-to-overlay.png" width="360px" %}

## 追踪更新

更新的追踪可以采用比特表（OBitVector），这个表存放在蒙层表（OMT）中，所以需要一次独立的请求获取，随后可以放在TLB缓存中。这会增加内存访问和TLB缺失，但是总体性能提升完全可以弥补相关性能开销。完整架构见下图：

{% include image.html src="microarchitecture.png" width="720px" %}

## 蒙层压缩

蒙层页修改的缓存行通常应该较少，否则可以取消蒙层页，直接转换为常规页。让较少修改的蒙层页占据整个物理页会比较浪费，所以可以进行压缩。如下图，修改了哪些缓存行就保存哪些。但是同时也可带来额外的间接查询开销，而且使得追加写产生额外写放大。

{% include image.html src="compaction.png" width="360px" %}
