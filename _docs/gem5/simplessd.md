---
layout: doc
title: SimpleSSD - Gem5下的SSD仿真器
order: 1
---

# SimpleSSD使用文档——安装及运行

## 1. Start

### 1.1 安装依赖

- `apt install build-essential`
- `apt install scons python-dev zlib1g-dev m4 cmake`
- `apt install libprotobuf-dev protobuf-compiler`
- `apt install libgoogle-perftools-dev`

### 1.2 下载SimpleSSD

- `git clone git@github.com:simplessd/simplessd-fullsystem`
- `cd simplessd-fullsystem`
- `git submodule update --init --recursive`

### 1.3 Build

- `scons build/ARM/gem5.opt -j 8 --ignore-style`
- `scons build/X86/gem5.opt -j 8 --ignore-style`

### 1.4 系统仿真

- 下载文件(需VPN)
    - https://drive.google.com/drive/folders/14b-kJmGXOhltX9Aqr8XV9i48KkZk4Lzs?usp=sharing
- `mkdir $HOME/m5`（$HOME可改为其他路径）
- `export M5_PATH=$HOME/m5`

### 1.5 ARM专用依赖

- `apt install device-tree-compiler`

## 2 运行

- 一般命令格式：`./build/<arch>/gem5.<build mode> [gem5 options] <simulation script> [script options]`
- `<arch>` 可以是ARM或X86， SimpleSSD只支持这两种架构。
- `<build mode>` 可以是debug、opt、fast、prof和perf，更多细节可以查看[gem5 build命令](http://www.gem5.org/documentation/general_docs/building)。
- `<simulation script>` 定义了仿真的硬件和软件系统。gem5在 **configs/example** 内提供了仿真脚本示例。修改了默认的全系统仿真脚本 (**configs/example/fs.py**) 来支持gem5内部使用SimpleSSD。

### 2.1 运行ARM架构

- `./build/ARM/gem5.opt --debug-flag=M5Print --debug-file=debug.txt 
    ./configs/example/fs.py --kernel=aarch64-vmlinux-4.9.92 
    --dtb-file=armv8_gem5_v1_4cpu.dtb --machine-type=VExpress_GEM5_V1 
    --num-cpu=4 --cpu-clock=2GHz --caches --l2cache --cpu-type=AtomicSimpleCPU 
    --mem-size=4GB --mem-type=DDR4_2400_8x8 
    --ssd-interface=nvme --ssd-config=./src/dev/storage/simplessd/config/sample.cfg`

### 2.2 运行选项

#### 2.2.1 gem5运行选项

|选项|描述|
|:-:|:-|
|--debug-flag|设置以逗号分隔的调试标志列表。这决定了哪些硬件模块的调试日志会被打印。|
|--debug-file|设置用来存储调试日志的文件。|
|--outdir, -d|设置用来存储所有仿真输出的目录。|
|--redirect-stdout, -r|将gem5的stdout和stderr重定向到 **simout** 文件。可以使用--stdout-file选项更改重定向的文件名。|
|--redirect-stderr, -e|将gem5的stderr重定向到 **simerr** 文件。可以使用--stderr-file选项更改重定向的文件名。|
- 要了解更多的选项，可以运行`./build/ARM/gem5.opt --help`命令，或查看[gem5帮助文档](http://old.gem5.org/Running_gem5.html)。 

#### 2.2.2 仿真脚本运行选项

|选项|描述|
|:-:|:-|
|--kernel|设置要使用的内核映像，路径相对于$M5_PATH/binaries。|
|--num-cpu|设置系统进行仿真的CPU数。如果仿真ARM，则应使用dtb文件中定义的相同值。如果仿真X86，当系统仿真两个或更多CPU时，仿真可能会不稳定。|
|--cpu-type|设置要使用的CPU型号，默认值为AtomicSimpleCPU。可以使用--list-cpu-type选项查看可能的值。SimpleSSD支持gem5提供的所有CPU模式。如果正在使用X86，则在使用其他CPU型号而不是AtomicSimpleCPU时，仿真可能会不稳定。|
|--cpu-clock|设置CPU的时钟速率 (频率) 。|
|--caches|启用私有L1I和L1D缓存。可以使用下列选项改变大小和关联性：--l1i_size，--l1d_size，--l1i_assoc和--l1d_assoc。|
|--l2cache|启用共享的二级缓存。可以使用以下选项更改大小和关联性：--l2_size和--l2_assoc。|
|--mem-size|设置系统内存 (DRAM) 的容量。|
|--mem-type|设置要使用的内存模型。可以使用--list-mem-type选项查看可能的值。|
|--script|设置仿真启动后自动执行的脚本文件。|
|--root-device|将磁盘分区设置为以root身份挂载（例如/dev/sda1）。|
|--disk-image|设置磁盘映像以用作OS镜像。仿真X86时，默认值为x86root.img；仿真ARM时，默认值为linux-aarch32-ael.img或linaro-minimal-aarch64.img。路径相对于$M5_PATH/disks。|

<br>下表中为ARM专用的选项：  

|选项|描述|
|:-:|:-|
|--dtb-file|设置已编译的DeviceTree（dtb）文件。|
|--machine-type|设置仿真的硬件平台。可以使用--list-machine-type来查看可能的值，但SimpleSSD仅支持VExpress_GEM5_V1。|

<br>下表中为SimpleSSD添加的选项：

|选项|描述|
|:-:|:-|
|--ssd-interface|设置要使用的主机接口协议/硬件。默认值为nvme。可能的值：nvme，ocssd1，ocssd2，sata和ufs。ufs仅适用于ARM架构。|
|--ssd-config|设置SimpleSSD配置文件，路径相对于当前工作目录|

#### 2.2.3 配置文件

- 样本配置文件可查看`src/dev/storage/simplessd/config/sample.cfg`。
- 可以从[此处](https://docs.simplessd.org/en/v2.0.12/download.html#download-config-file)下载经过验证的配置文件。

## 3 运行结果

本节介绍如何分析仿真的结果。

### 3.1 分析SimpleSSD日志和统计信息

&nbsp;&nbsp;SimpleSSD打印调试日志，其中包含有关I/O请求的所有信息以及所有组件的统计信息。

#### 3.1.1 SimpleSSD调试日志

对于SimpleSSD-FullSystem，可以在gem5的stdout标准输出上找到调试日志。对于SimpleSSD-Standalone，可以通过定义`[global] DebugLogFile`仿真选项决定将调试日志保存在何处。

<details>
<summary>调试信息</summary>

line 1: 861004146876: HIL::NVMe: SQ 3    | Submission Queue Tail Doorbell | Item count in queue 0 -> 1 | head 432 | tail 432 -> 433<br>
line 2: 861004362088: HIL::NVMe: NVM     | READ  | NSID 1     | 1B0 + 1<br>
line 3: 861004362088: HIL: READ  | REQ     477 | LCA 432 + 1 | BYTE 0 + 4096<br>
line 4: 861004362088: ICL::GenericCache: READ  | REQ     477-1    | LCA 432 | SIZE 4096<br>
line 5: 861004362088: ICL::GenericCache: READ  | Cache hit at (0, 71) | 861004362088 - 861005056598 (694510)<br>
line 6: 861004362088: ICL::GenericCache: READ  | Prefetch triggered<br>
line 7: 861004362088: ICL::GenericCache: ----- | Begin eviction<br>
line 8: 861004362088: ICL::GenericCache: ----- | End eviction | 861008457768 - 861008457768 (0)<br>
line 9: 861004362088: FTL: READ  | LPN 5<br>
line 10: 861004362088: PAL::PALOLD: READ  | Block 2555 | Page 1<br>
line 11: 861004362088: PAL::PALOLD: READ  | C     0 | W     0 | D     0 | P     0 | B   511 | P     1<br>
line 12: 861004362088: FTL::PageMapping: READ  | LPN 5 | 861008457768 - 861126478092 (118020324)<br>
line 13: 861004362088: ICL::GenericCache: READ  | Cache miss at (0, 77) | 861008457768 - 861126775592 (118317824)<br>
line 14:<br> 
line 15: ...<br>
line 16: <br>
line 17: 861004362088: FTL: READ  | LPN 5<br>
line 18: 861004362088: PAL::PALOLD: READ  | Block 2555 | Page 1<br>
line 19: 861004362088: PAL::PALOLD: READ  | C    11 | W     0 | D     0 | P     0 | B   511 | P     1<br>
line 20: 861004362088: FTL::PageMapping: READ  | LPN 5 | 861008457768 - 861126478092 (118020324)<br>
line 21: 861004362088: ICL::GenericCache: READ  | Cache miss at (3, 77) | 861008457768 - 861126775592 (118317824)<br>
line 22: 861004362088: FTL: READ  | LPN 5<br>
line 23: 861004362088: PAL::PALOLD: READ  | Block 2555 | Page 1<br>
line 24: 861004362088: PAL::PALOLD: READ  | C     0 | W     0 | D     1 | P     0 | B   511 | P     1<br>
line 25: 861004362088: FTL::PageMapping: READ  | LPN 5 | 861008457768 - 861138228620 (129770852)<br>
line 26: 861004362088: ICL::GenericCache: READ  | Cache miss at (4, 77) | 861008457768 - 861138526120 (130068352)<br>
line 27: <br>
line 28: ...<br>
line 29: <br>
line 30: 861004362088: FTL: READ  | LPN 5<br>
line 31: 861004362088: PAL::PALOLD: READ  | Block 2555 | Page 1<br>
line 32: 861004362088: PAL::PALOLD: READ  | C    11 | W     0 | D     7 | P     0 | B   511 | P     1<br>
line 33: 861004362088: FTL::PageMapping: READ  | LPN 5 | 861008457768 - 861208731788 (200274020)<br>
line 34: 861004362088: ICL::GenericCache: READ  | Cache miss at (7, 87) | 861008457768 - 861209029288 (200571520)<br>
line 35: 861004362088: ICL::GenericCache: READ  | Prefetch done<br>
line 36: 861004362088: ICL: READ  | LCA 432 + 1 | 861004362088 - 861006961598 (2599510)<br>
line 37: 861007304098: HIL::NVMe: NVM     | READ  | NSID 1     | 1B0 + 1 | 861004362088 - 861007304098 (2942010)<br>
line 38: 861007444114: HIL::NVMe: INTR    | MSI-X sent | vector 2<br>
line 39: 861008760480: HIL::NVMe: CQ 3    | Completion Queue Head Doorbell | Item count in queue 1 -> 0 | head 432 -> 433 | tail 433<br>
</details>

- 如第6行所示，由于已满足预取条件，因此触发了预取。此时SimpleSSD的GenericCache模块将读取一个super page或从所有plane中读取所有page（此选择可以配置）。
- 在第13和21行，可以看到由PAL计算的延迟具有相同的值（118,317,824 ps）。这两个请求是针对不同channel的，因此它们可以同时运行（它们分别访问channel 0和channel 11）。在第26行，延迟变为130,068,352 ps，这是因为channel 0有先前的请求，所以PAL认定存在channel冲突。在第34行，由于先前针对7个die（die 0至die 6）的I/O，针对channel 11中的die 7的请求延迟了约90 us。
- 预取后，GenericCache返回请求，如第36行所示。延迟非常小，因为请求的数据已存在于缓存中（参见第5行）。
- 通过分析调试日志，可以找到每个I/O的特征以及哪个组件消耗了大部分I/O延迟。

#### 3.1.2 SimpleSSD统计信息

对于SimpleSSD-FullSystem，可以在`m5out/stats.txt`中找到统计信息。  
以下是统计数据的示例，使用带有选项`--direct=1 --ioengine=libaio --bs=4K --iodepth=1 --rw=read --based --time_based --runtime=5s`的fio进行I/O生成。
<details>
<summary>统计信息</summary>

system.pci_nvme.command_count                  413480                       # Total number of NVMe command handled<br>
system.pci_nvme.read.request_count             413480                       # Read request count<br>
system.pci_nvme.read.bytes                 1693614080                       # Read data size in byte<br>
system.pci_nvme.read.busy                1653776508704                       # Device busy time when read<br>
system.pci_nvme.write.request_count                 0                       # Write request count<br>
system.pci_nvme.write.bytes                         0                       # Write data size in byte<br>
system.pci_nvme.write.busy                          0                       # Device busy time when write<br>
system.pci_nvme.request_count                  413480                       # Total request count<br>
system.pci_nvme.bytes                      1693614080                       # Total data size in byte<br>
system.pci_nvme.busy                     1653776508704                       # Total device busy time<br>
system.pci_nvme.icl.generic_cache.read.request_count       413480                       # Read request count<br>
system.pci_nvme.icl.generic_cache.read.from_cache       413224                       # Read requests that served from cache<br>
system.pci_nvme.icl.generic_cache.write.request_count            0                       # Write request count<br>
system.pci_nvme.icl.generic_cache.write.to_cache            0                       # Write requests that served to cache<br>
system.pci_nvme.dram.energy.act          351568356.208920                       # ACT command energy (pJ)<br>
system.pci_nvme.dram.energy.pre          437367776.459918                       # PRE command energy (pJ)<br>
system.pci_nvme.dram.energy.rd           368277927.504022                       # RD command energy (pJ)<br>
system.pci_nvme.dram.energy.wr           198140164.999281                       # WR command energy (pJ)<br>
system.pci_nvme.dram.energy.act.standby  1992764428.068482                       # ACT standby energy (pJ)<br>
system.pci_nvme.dram.energy.pre.standby  146846141074.948761                       # PRE standby energy (pJ)<br>
system.pci_nvme.dram.energy.ref          2589408.045731                       # Refresh energy (pJ)<br>
system.pci_nvme.dram.read.request_count        826662                       # Read request count<br>
system.pci_nvme.dram.read.bytes            1695873008                       # Read data size in byte<br>
system.pci_nvme.dram.write.request_count       413438                       # Write request count<br>
system.pci_nvme.dram.write.bytes           1693442048                       # Write data size in byte<br>
system.pci_nvme.dram.request_count            1240100                       # Total request count<br>
system.pci_nvme.dram.bytes                 3389315056                       # Total data size in byte<br>
system.pci_nvme.ftl.page_mapping.gc_count            0                       # Total GC count<br>
system.pci_nvme.ftl.page_mapping.reclaimed_blocks            0                       # Total reclaimed blocks in GC<br>
system.pci_nvme.pal.energy.read          2892824.972693                       # NAND power used on read transaction (uJ)<br>
system.pci_nvme.pal.energy.program                  0                       # NAND power used on program transaction (uJ)<br>
system.pci_nvme.pal.energy.erase                    0                       # NAND power used on erase transaction (uJ)<br>
system.pci_nvme.pal.energy.total         2892824.972693                       # NAND power used on all transaction (uJ)<br>
system.pci_nvme.cpu.icl0.busy            929296300000                       # CPU for ICL core 0 busy ticks<br>
system.pci_nvme.cpu.icl0.insts.branch        31837960                       # CPU for ICL core 0 executed branch instructions<br>
system.pci_nvme.cpu.icl0.insts.load         193508640                       # CPU for ICL core 0 executed load instructions<br>
system.pci_nvme.cpu.icl0.insts.store         26049240                       # CPU for ICL core 0 executed store instructions<br>
system.pci_nvme.cpu.icl0.insts.arithmetic    118668760                       # CPU for ICL core 0 executed arithmetic instructions<br>
system.pci_nvme.cpu.icl0.insts.fp                   0                       # CPU for ICL core 0 executed floating point instructions<br>
system.pci_nvme.cpu.icl0.insts.others         1653920                       # CPU for ICL core 0 executed other instructions<br>
system.pci_nvme.cpu.ftl0.busy            373127795000                       # CPU for FTL core 0 busy ticks<br>
system.pci_nvme.cpu.ftl0.insts.branch        21085338                       # CPU for FTL core 0 executed branch instructions<br>
system.pci_nvme.cpu.ftl0.insts.load          74418840                       # CPU for FTL core 0 executed store instructions<br>
system.pci_nvme.cpu.ftl0.insts.store         12403140                       # CPU for FTL core 0 executed load instructions<br>
system.pci_nvme.cpu.ftl0.insts.arithmetic     39276610                       # CPU for FTL core 0 executed arithmetic instructions<br>
system.pci_nvme.cpu.ftl0.insts.fp                   0                       # CPU for FTL core 0 executed floating point instructions<br>
system.pci_nvme.cpu.ftl0.insts.others         2067190                       # CPU for FTL core 0 executed other instructions<br>
</details>

- 每行包含一个组件统计信息。例如，可以在第15-21行找到DRAMPower结果，可以在第34-47行找到CPU统计信息。

### 3.2 分析仿真器的调试日志和统计信息

可以分析调试日志和仿真器本身的统计信息。

- 与分析SimpleSSD日志和统计信息类似，gem5使用`--debug-file`和`stats.txt`打印硬件组件和统计信息的详细调试日志。可以使用相同的方法分析`stats.txt`文件。
- `--debug-file`指定在哪里保存硬件调试日志。`--debug-flag`指定要启用调试日志打印输出的硬件模块。
- 可以使用`./build/ARM/gem5.opt --debug-help`命令列出所有可用的调试标志。

### 3.3 在用户级分析

如果使用的是SimpleSSD-FullSystem，则可以使用用户级基准程序来分析SimpleSSD。 编译基准测试程序（请参阅[构建gem5的用户级程序](https://docs.simplessd.org/en/v2.0.12/tips/program.html)）并在gem5内部运行。  
<details>
<summary>示例脚本（加上--script选项）</summary>

#!/bin/bash<br>
cd /home/root<br>
./stat 100 &<br>
m5 resetstats<br>
./fio --direct=1 --ioengine=libaio --iodepth=1 --bs=4096 \<br>
--rw=read --filename=/dev/nvme0n1 --numjobs=1 --name=test --write_lat_log=test \<br>
--write_iops_log=test --write_bw_log=test \<br>
--log_avg_msec=10 --time_based --runtime=5s \<br>
--randseed=13425<br>
m5 dumpstats<br>
m5 writefile test_clat.1.log<br>
m5 writefile test_slat.1.log<br>
m5 writefile test_lat.1.log<br>
m5 writefile test_iops.1.log<br>
m5 writefile test_bw.1.log<br>
m5 exit<br>
</details>

- 在第3行，stat程序（通过`/proc`文件系统）收集内核/用户的CPU和DRAM利用率。在第4行，将gem5的所有统计信息重置为零。执行fio并转储最终统计信息（第10行）。 写入fio的结果文件后，终止仿真（第16行）。
- 模拟后可以获得6个文件（一个用于fio输出，五个用于fio日志文件）。

## 常见问题

### gem5.opt运行出错①

- 执行命令：见[2.1](#21-运行ARM架构)。
- 错误信息：IOError: Can't find file 'linux-aarch32-ael.img' on M5_PATH.
- 解决方法：**configs/common/Benchmarks.py** 第65行的disk名修改为M5_PATH/disks内的arm镜像名。

### gem5.opt运行出错②

- 执行命令：见[2.1](#21-运行ARM架构)。
- 错误信息：IOError: Can't find file 'armv8_gem5_v1_4cpu.dtb' on M5_PATH.
- 解决方法：去掉执行命令中的 --dtb-file=armv8_gem5_v1_4cpu.dtb。

### gem5.opt运行出错3

- 执行命令：

```bash
M5_PATH=$HOME/m5 ./build/X86/gem5.opt --debug-flag=M5Print --debug-file=debug.txt ./configs/example/fs.py --kernel=x86_64-vmlinux-4.9.92 --num-cpu=2 --cpu-clock=2GHz --caches --l2cache --cpu-type=AtomicSimpleCPU --mem-size=2GB --mem-type=DDR4_2400_8x8 --ssd-interface=nvme --ssd-config=./src/dev/storage/simplessd/config/sample.cfg
```

- 错误信息：IOError: Can't find file 'x86root.img' on M5_PATH.
- 原因：推测可能的原因是M5_PATH export的环境变量未生效，但是在py中打印M5_PATH确实是`$HOME/m5`，玄学~
- 解决方法：直接指定所需的两个文件路径，i.e., x86_64-vmlinux-4.9.92和x86root.img，前者用`--kernel`选项指定，后者用`--disk-image`指定。

```bash
./build/X86/gem5.opt --debug-flag=M5Print --debug-file=debug.txt ./configs/example/fs.py --kernel=/home/shiliu/m5/binaries/x86_64-vmlinux-4.9.92 --num-cpu=2 --cpu-clock=2GHz --caches --l2cache --cpu-type=AtomicSimpleCPU --mem-size=2GB --mem-type=DDR4_2400_8x8 --ssd-interface=nvme --ssd-config=./src/dev/storage/simplessd/config/sample.cfg --disk-image=/home/shiliu/m5/disks/x86root.img
```

[返回科研指南](https://haslab.org/guide/index.html)
