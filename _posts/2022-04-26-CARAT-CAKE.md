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
- 分页需要软硬件协同处理，硬件上的TLB的能源开销很大
- 应用负载变得愈发复杂，给硬件的压力越来越大。

既然硬件的开销很大，而且硬件为了保证地址转换的时间，压力也越来越大，那么就绕过这些分页有关的硬件，提出纯软件的方式去管理内存，LLVM给这种想法提供了支持。


## Design
CARAT的核心就是将硬件的功能移到编译时由编译器实现，作者之前提出了CARAT(Compiler And Runtime-based Address Translation)，为用户态程序提供软件的分页机制，其中程序都使用物理地址，编译时进行地址转换。但是CARAT并没有解决内核中的软件分页支撑问题，于是作者提出了CARAT-CAKE系统来在内核为软件分页提供支持。

### CARAT((Compiler And Runtime-based Address Translation))
CARAT将编译器注入的优化代码与运行时系统相结合，以实现内存管理和保护。更具体地说，编译器改变了所有代码的中间表示（IR），注入了与分页提供的内存管理功能相匹配的运行调用。

CARAT的限制是完全是在Linux的用户层面上运行的，这足以说明CARAT的对于软件分页机制的实现，但缺乏对保护和内存管理的内在实现，所以性能提升不高。

### CARAT CAKE
CARAT是有局限的，它构建在Linux进程抽象、分页和MMU之上，而不是在内核中驱动内存管理。 

CARAT CAKE为了解决这个问题，在内核中对Linux的分页相关机制进行了修改。其设计如下所示
![image](/images/2022-04-26-CARAT-CAKE/Snipaste_2022-04-26_16-06-34.png)  

上面的绿色部分就是之前CARAT的设计，是在用户态，下面的红色是内核中的设计。
- aspace 由一组内存区域组成，这些区域包含权限，并表示用户程序的结构，如堆栈、堆。
- Defragmentation 因直接使用物理地址会存在碎片问题，解决碎片问题
- Library Allocators 内存分配器

编译器、运行时和内核通过一组基本抽象进行耦合，这些抽象允许内核管理物理地址空间。内核分配内存区域，并将其分组为aspace，内核可以将其委派、扩展或分配给需要内存的实体。编译器对内核和用户程序的指令插入，在运行时进行，提供了内存跟踪和保护空间。

## evaluation
![image](/images/2022-04-26-CARAT-CAKE/Snipaste_2022-04-26_17-28-15.png)  

使用NAS作为标准的测试集，蓝色部分是内核版本为5.8.0的linux作为基准，可以看到因为减少了硬件相关的开销，PAGE的开销降低了。

