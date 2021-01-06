---
title: Gem5全系统仿真软件
layout: doc
section: true
doc: 5
order: 1
---

## Gem5简介

[Gem5](http://www.gem5.org/)是一款模块化的离散事件驱动全系统模拟器，它结合了M5和GEMS中最优秀的部分，M5提供了高度可配置的模拟框架，支持多种ISAs和CPU模型；GEMS补充了M5的特性，提供了详细而灵活的内存系统，包括多种cache 一致性协议和互连模型，是一款高度可配置、集成多种ISA，多种CPU模型的体系结构模拟器。

gem5模拟器目前支持多种ISAs，包括Alpha、ARM、MIPS、Power、SPARC和x86。模拟器的模块性允许这些不同的ISAs插入到通用CPU模型和内存系统中，而不需要为每一种ISAs设置一种专用的CPU模型和存储模型，这使得模拟器模块化程度较高且易于在不同CPU之间切换。

M5是由Michigan大学开发的一款开源的多处理机模拟器，受到了业内的广泛关注，很多高水平论文都采用M5作为研究工具。另一方面，Wisconsin推出的GEMS能够对储存层次进行详细而灵活的模拟，包括对多种不同的cache一致性协议和互联模型的支持。目前的GEM5是M5和GEMS的一个紧耦合版本。