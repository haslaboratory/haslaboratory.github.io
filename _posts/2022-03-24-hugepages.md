---
layout: post
title: "Fallocate Hugepages"
author: Yicun Feng
tags:
 - Femu
 - 2022
 - Part of Memory use 1GB Hugesizes
---

[大页(Huge Page)设置](https://www.cnblogs.com/wyzhou/p/9596575.html)

本文在Femu虚拟机上在部分内存中使用1GB大页

#### 1. fisrt step

在运行femu的脚本中修改内存大小，根据大页的使用情况进行调节（例如需要4 * 1GB的大页那么需要将内存调整为8G及以上）

#### 2. second step

修改femu启动脚本，在/etc/default/grub的GRUB_CMDLINE_LINUX中添加default_hugepagesz=1GB hugepagesz=1G hugepages=4（前两个参数为大页的大小，后面的参数为设置的大页数目）。

#### 3. Third step

使用grub-mkconfig -o /boot/grub/grub.cfg命令更新启动脚本，然后使用reboot的命令重启femu。

#### 4. Fourth step

使用cat /proc/meminfo查看Hugepagesize是否修改成功，以及free的大页数目。修改成功后，进行大页文件系统的挂载使用命令mount -t hugetlbfs hugetlbfs /dev/hugepages将hugetlbfs挂载到/dev/hugepages上。

#### 5. Fifth step

使用fallocate -l 4G /dev/hugepages/qemutest命令将大页分配到/dev/hugepages/qemutest中。

[参考文章1](https://www.cnblogs.com/wyzhou/p/9596575.html) 
[参考文章2](https://stackoverflow.com/questions/44379170/hugepagesize-is-not-increasing-to-1g-in-vm) 