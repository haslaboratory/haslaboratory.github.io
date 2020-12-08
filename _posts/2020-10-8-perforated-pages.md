---
layout: post
title: Perforated Page Supporting Fragmented MemoryAllocation for Large Pages
author: Weizhou Huang
tags:
 - 2020
 - ISCA
 - Virtual memory
 - Huge pages
---

# [Perforated Page: Supporting Fragmented Memory Allocation for Large Pages]() 

## 背景和问题：

当应用使用大段连续内存空间的时候，使用大页映射能够减少映射条目，提高TLB命中率，从而 有效降低地址转换开销，
然而，大页映射存在地址转换效率和内存管理灵活性上的权衡，具体来说有两点：
第一，当使用大页映射但是每次访问内存只访问映射区域的一部分时，会导致物理内存使用量激增
第二，以下几种情况无法使用大页映射，即由于内存碎片化问题导致没有空闲的大段物理内存，或者某段虚拟内存空间中存在不可移动的或者访问权限不同的 4KB页
这里不可移动的内存页是指操作系统内核用于设备驱动，page cache和其他操作系统服务的内存页

