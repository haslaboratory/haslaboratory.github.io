---
layout: post
title: "CARAT CAKE:通过编译器和内核合作取代分页"
author: Aoxin Wei
tags:
 - ASPLOS
 - 2022
 - virtual memory
 - memory management
 - kernel
 - run time
---
# [CARAT CAKE: Replacing Paging via Compiler/Kernel Cooperation](https://dl.acm.org/doi/pdf/10.1145/3503222.3507771)

## Introduction
虚拟内存中，尤其是分页机制的虚拟内存已经在操作系统的的各方面中深深嵌入。这个从1960年引进的机制，帮助拓展了物理内存、给程序员提供了简单的抽象、保护内核不受进程关系的干扰等起到了很大的作用。

但是，分页同样会带来开销
= 分页需要软硬件协同处理，硬件上的TLB的能源开销很大
- 应用负载变得愈发复杂，给硬件的压力越来越大。

既然硬件的开销很大，而且硬件为了保证地址转换的时间，压力也越来越大，那么就绕过这些分页有关的硬件，提出纯软件的方式去管理内存，LLVM给这种想法提供了支持。


## Design


