---
title: 利用应用感知的内存通道分区降低多核系统的内存干扰
author: Liu Shi
tags:
    - memory paritioning
    - Multicore system
---

# Reducing Memory Interference in Multicore Systems via Application-Aware Memory Channel Partitioning 

[文章来源](https://people.inf.ethz.ch/omutlu/pub/memory-channel-partitioning-micro11.pdf)

## 背景和问题

不同应用的内存请求间互相干扰，这样会导致系统性能下降，但是以前的工作认为这是内存访问调度研究的问题。根据以往知识，作者指出，1) 地址总线和数据总线是独立访问的，可以并行执行，2) 在进行内存页转换时，应用特征可以用cache miss和row buffer局部性表征。

以memory-intensity和row-buffer hit ratio作为应用特征衡量，作者做了两组实验，示意图如下，以阐述应用间干扰问题。
1）memory-intensity
![image](/images/2020-11-19-memory-intensity.png)
2）row-buffer hit ratio
![image](/images/2020-11-19-row-buffer-hit.png)

## 设计
作者提出了两个设计，内存通道分区机制，和将此机制与调度器结合。
1）内存通道分区
按照memory-intensity和row-buffer hit ratio对应用进行分组，在分组内，按照正比于应用数分配通道。
2）调度
识别低内存密度应用，在内存调度器中优先服务这些应用下发的请求，并且允许这些应用的页映射到任何内存通道上。
