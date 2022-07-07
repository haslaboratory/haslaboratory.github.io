---
layout: post
title: "NDS: N-Dimensional Storage"
author: Meng Wang
tags:
 - MICRO
 - 2021
 - multi-dimensional memory/storage system
---

# [NDS: N-Dimensional Storage]([NDS: N-Dimensional Storage | MICRO-54: 54th Annual IEEE/ACM International Symposium on Microarchitecture](https://dl.acm.org/doi/abs/10.1145/3466752.3480122))

## Introduction

现有的硬件加速器、存储架构与应用均是多维度化，但数据存储与存储系统仍然采用一维的寻址方式。这种存储抽象方式导致对硬件加速器内高维数据密集型运算核的利用率低、对元件互联与存储设备带宽的利用率低。

传统的方式认为采取应用设计的数据存储方式与优化的算法能解决存储抽象与运算核的不匹配问题，但是找到合适的数据存储格式是极其困难的。论文提出了NDS解决上述存储抽象失配问题以满足现代硬件加速器高维运算核/应用的需求。

## Challenges

解决存储数据与运算核的维度不匹配的问题需要：

1)数据布局需要最小化在运算核与硬件加速器内的数据重构开销

2)数据布局需要让应用充分利用存储设备内部带宽

3)数据布局必须最大化I/O指令的粒度、最小化I/O请求数量

现有的线性寻址空间下存储系统完成上述工作有以下挑战：

C1:对应用的内部存储设备架构的无效用

C2：运算核的最佳维度的不可预测

C3：存储设备与运算核的需求不匹配

## NDS Design

![image](/images/2022-07-07-NDS/nds1.png)

1）NDS数据集生产者创建一个多维空间，STL解析数据结构、决定Building Blocks的维度、向软件返回Space Identifier

2）向NDS传输数据时，应用传递源数据存储位置与地址空间位置信息

3）STL取数据并使用一系列Building Blocks存储

4）当应用需要使用数据时，应用通知NDS其对数据的视角

5）请求数据块坐标和相关的子维度信息

6）STL对坐标等信息进行转换取出Building Blocks 

7）NDS组装数据并提供使用

传统存储系统与NDS下访问子矩阵的方式对比:

![image](/images/2022-07-07-NDS/nds2.png)

![image](/images/2022-07-07-NDS/nds3.png)

## NDS Implement

下图展示了传统存储系统(a)、软件部署NDS(b)、硬件支持部署NDS方式(c)

![image](/images/2022-07-07-NDS/nds4.png)

应用于NDS的SSD控制器结构：

![image](/images/2022-07-07-NDS/nds5.png)

## Experiment&Results

![image](/images/2022-07-07-NDS/nds6.png)

![image](/images/2022-07-07-NDS/nds7.png)

## Conclusion

论文工作为首个呈现以应用定义的多维度存储抽象作为现有线性存储抽象的另一方案。

设计了NDS，提供应用多维空间地址并将存储维度与应用最佳数据维度解耦。

成功解决隐蔽设备参数带来的挑战、应用程序内核的不可预测性、设备之间维度不匹配的问题。
