---
layout: post
title: "File Pattern-guided Compression: 使用模式感知的文件压缩"
author: Jian Zhou
issue: 9
tags:
    - FAST
    - 2021
    - Compression
    - Mobile
---

**Pattern-Guided File Compression with User-Experience Enhancement for Log-Structured File System on Mobile Devices**
[[Paper](https://www.usenix.org/system/files/fast21-ji.pdf)] [[Video](https://www.youtube.com/watch?v=fubyf-a-enk)] [[Video 中文](https://ipads.se.sjtu.edu.cn/chinasys21/vedios/Pattern-Guided%20File%20Compression%20with%20User-Experience%20Enhancement%20for%20Log-Structured%20File%20System%20on%20Mobile%20Devices-%E8%96%9B%E6%98%A5.mp4)]

这篇论文来自南京理工大学，主要研究手机系统中的文件压缩。手机内部有非常多零星的小写和小读：

{% include image.html src="pattern.jpg" width="360px" %}

这样的读写模式导致传统的文件压缩方法效率不高。传统压缩主要对连续写进行压缩，由于手机写入非常碎片化，连续压缩后仍以4KB粒度存效果并不好。而以读性能为主要优化目标的只读压缩又不能支持写操作。

这篇论文设计了两步压缩分别解决读写问题。

### 前台压缩 - 写

前台压缩在写入时进行，主要解决写入的性能问题，动态支持随机写的合并和压缩。

### 后台压缩 - 读

后台压缩主要为读优化。前台压缩导致数据碎片化严重，后台压缩在负载轻时，重新组织数据，从而提高读性能。