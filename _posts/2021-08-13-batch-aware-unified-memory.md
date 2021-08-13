---
layout: post
title: "Batch-Aware Unified Memory: 面向GPU的批处理式统一内存管理"
author: Jian Zhou
tags:
    - ASPLOS
    - 2020
    - GPUs
    - Unified Memory
    - Virtual Memory
---

**Batch-Aware Unified Memory Management in GPUs for Irregular Workloads**

[[Paper](https://ramyadhadidi.github.io/files/kim-asplos20.pdf)] [[Video](https://www.youtube.com/watch?v=jMfQEZNvhg8)]

统一内存利用虚拟内存对多个地址空间（包括硬盘空间、GPU缓存空间等）进行统一编址，然后通过缺页中断实现透明的页迁移。统一内存降低了编程难度，程序开发人员不需要进行显式的数据迁移，然而数据迁移仅仅被“隐藏”而不是消失了。除了迁移本身的开销，统一内存还增加了中断处理和虚拟内存管理的开销。这对内存密集型负载，如GPU负载，是不友好的。所以GPU运行时通过合并多个缺页中断来降低相应开销。

什么情况下缺页中断会比较多呢？答案是，当短时间内需要访问比较大范围数据的时候，即不规律负载（Irregular Workloads），通常为图的遍历！当使用的GPU核数增多时，不规律负载访问的数据范围远高于常规负载。

{% include image.html src="working_set_size.jpg" width="360px" %}

访问的数据范围大，缓存命中率于是就会下降，中断请求紧接着就会增多。那么采用如下图所示的中断合并会带来什么变化呢？

{% include image.html src="gpu_page_faults.jpg" width="720px" %}

我们会发现平均每个缺页中断的处理时间随着批处理大小的增大而近似于指数收敛：

{% include image.html src="per_page_fault_handling_time.jpg" width="360px" %}

利用这个发现，这篇论文通过两个优化提高性能。

1. 通过增加虚拟线程数，进一步提高批处理大小。
2. 通过异步的进行页换出，降低单次页替换的开销。