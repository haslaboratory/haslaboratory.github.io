---
title: 推荐论文
layout: doc
order: 3
---

| 来源 | 标题 | 话题 |
|---|---|---|
| | <center>数据表示</center> | |
| Micro 2019 | [Leveraging Caches to Accelerate Hash Tables and Memoization](http://people.csail.mit.edu/sanchez/papers/2019.hta.micro.pdf) | 数据表示、索引加速 |
| FAST 2020 | [FPGA-Accelerated Compactions for LSM-based Key-Value Store](https://www.usenix.org/conference/fast20/presentation/zhang-teng) | 数据表示、硬件排序 |
| Micro 2018 | [Osiris: A Low-Cost Mechanism to Enable Restoration of Secure Non-Volatile Memories](https://cfwebprod.sandia.gov/cfdocs/CompResearch/docs/main7.pdf) | 校验与纠错 |
| | <center>浮点数</center> | |
| ISCA 2020 | [Tailored Page Sizes](https://ieeexplore.ieee.org/document/9138990) | 浮点数、虚拟内存 |
| Supercomputing Frontiers 2017 | [Beating floating point at its own game: Posit arithmeticBeating Floating Point at its Own Game: Posit Arithmetic](http://www.johngustafson.net/pdfs/BeatingFloatingPoint.pdf) | 新浮点数 |
| | <center>动态内存</center> | |
| Micro 2019 | [ComputeDRAM: In-Memory Compute Using Off-the-Shelf DRAMs](https://parallel.princeton.edu/papers/micro19-gao.pdf) | 利用动态内存实现计算 |
| Micro 2013 | [RowClone: Fast and Energy-Efficient In-DRAM Bulk Data Copy and Initialization](https://users.ece.cmu.edu/~omutlu/pub/rowclone_micro13.pdf) | 利用DRAM内部缓存实现拷贝 |
| Micro 2020 | [FIGARO: Improving System Performance via Fine-Grained In-DRAM Data Relocation and Caching](https://arxiv.org/pdf/2009.08437.pdf) | 利用DRAM内部数据迁移优化数据布局 |
| Micro 2020 | [Bit-Exact ECC Recovery (BEER): Determining DRAM On-Die ECC Functions by Exploiting DRAM Data Retention Characteristics](https://arxiv.org/pdf/2009.07985.pdf) | 利用DRAM错误特征优化ECC |
| | <center>内存安全</center> | |
| ISCA 2014 | [Flipping Bits in Memory Without Accessing Them: An Experi- mental Study of DRAM Disturbance Errors (Rowhammer)](https://users.ece.cmu.edu/~yoonguk/papers/kim-isca14.pdf) | 利用动态内存刷新间隔翻转数据 |
| USENIX Security 2014 | [FLUSH+RELOAD: a High Resolution, Low Noise, L3 Cache Side-Channel Attack](https://www.usenix.org/system/files/conference/usenixsecurity14/sec14-paper-yarom.pdf) | 利用缓存窃密 |
| USENIX Security 2018 | [Meltdown: Reading Kernel Memory from User Space](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-lipp.pdf) | 利用指令乱序执行获得内核权限 |
| | <center>虚拟内存</center> | |
| ATC 2017 | [Optimizing the TLB Shootdown Algorithm with Page Access Tracking](https://www.usenix.org/conference/atc17/technical-sessions/presentation/amit) | 通过跟踪页表访问优化TLB |
| Asplos 2020 | [Batch-Aware Unified Memory Management in GPUs for Irregular Workloads](https://ramyadhadidi.github.io/files/kim-asplos20.pdf) | 面向GPU的批处理式统一内存管理 |
| ISCA 2020 | [Enhancing and Exploiting Contiguity for Fast Memory Virtualization](https://research.vmware.com/publications/enhancing-and-exploiting-contiguity-for-fast-memory-virtualization) | 降低虚拟化场景下的内存地址转换开销 |
| Asplos 2020 | [Elastic Cuckoo Page Tables: Rethinking Virtual Memory Translation for Parallelism](http://www.cs.cmu.edu/~dskarlat/publications/cuckoo_asplos20.pdf) | 基于哈希的虚拟内存映射表 |