---
layout: post
title: KVSSD & uNVMe 代码阅读
author: Jianfeng Wu
tags:
    - KVSSD
---

# KVSSD & uNVMe
---
KVSSD总体结构：
- application
    - kvbench
- PDK
    - core/src/api：应用程序使用的接口
    - core/src/device_abstract_layer：设备抽象层，kernel和仿真器共用
        - emulator
        - kernel_driver_adapter
    - driver/PCIe：PCIe驱动，包括kernel和userspace
        - kernel_driver
        - user_driver：Samsung的uNVMe
- spec
    - pdf，SNIA出版的KV存储API标准v1.1
---
## 1 SNIA API

init、process_completions、store_tuple、retrieve_tuple、delete_tuple、exist_tuple、create_iterator、delete_iterator、delete_iterator_all、iterator_next、get_waf、get_used_size、get_total_size、get_device_info

## 2 函数调用路径

### 2.1 put

- kvs_store_kvp：KVSSD/PDK/core/include/kvs_api.h line.546
- store_tuple：KVSSD/PDK/core/src/api/include/private/kvkdd.hpp、udd.hpp、kvemul.hpp

接下来有三条路径，分别对应kdd、udd和emulator。

#### 2.1.1 kdd->put

- kv_store：KVSSD/PDK/core/src/device_abstract_layer/include/kvs_adi.h line.1491
- KADI::kv_store：KVSSD/PDK/core/src/device_abstract_layer/kernel_driver_adapter/kadi.h line.256
- ioctl

#### 2.1.2 udd->put

两种写路径（同步与异步），以同步为例。
- kv_nvme_write：声明位于KVSSD/PDK/core/src/api/include/udd/kvnvme.h line.235，定义位于uNVMe/driver/core/kv_interface.c line.254（注意到该函数定义在uNVMe目录下，属于用户空间驱动给上层的接口）
- nvme_dev_operations::write：uNVMe/driver/core/kv_driver.h line.62（函数指针，指向实际的设备操作函数）
- _kv_nvme_store：uNVMe/driver/core/kv_cmd.h line.37（上述函数指针指向的实际调用函数，赋值位于uNVMe/driver/core/kv_driver.c的kv_nvme_init函数559行）
- spdk_nvme_kv_cmd_store：KVSSD/PDK/core/src/api/include/udd/spdk/kvnvme_spdk.h line.90（再次回到KVSSD目录下）

后续是SPDK内部命令请求的转换处理等。

// To add

#### 2.1.3 emulator->put

- kv_store：KVSSD/PDK/core/src/device_abstract_layer/include/kvs_adi.h line.1491
- kv_device_internal::kv_store：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_device.hpp line.177（cmd添加opcode：KV_OPC_STORE）
- kv_device_internal::submit_io：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_device.hpp line.94
- emul_ioqueue::enqueue：KVSSD/PDK/core/src/device_abstract_layer/include/private/queue.hpp line.113（设备IO队列）
- 经过队列的等待。
- io_cmd::execute_cmd：KVSSD/PDK/core/src/device_abstract_layer/include/private/io_cmd.hpp line.68（根据cmd的opcode进行函数处理）
- kv_namespace_internal::kv_store：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_namespace.hpp line.70
- kv_emulator::kv_store：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_emulator.hpp line.118（到达emulator内部）
- emulator通过两个kv_key*映射到string的unordered_map来存储KV pair。store语句：m_map[ks_id].emplace(std::make_pair(new_key, std::move(valstr)));

### 2.2 get

- kvs_retrieve_kvp：KVSSD/PDK/core/include/kvs_api.h line.476
- retrieve_tuple：KVSSD/PDK/core/src/api/include/private/kvkdd.hpp、udd.hpp、kvemul.hpp

接下来有三条路径，分别对应kdd、udd和emulator。

#### 2.2.1 kdd->get

- kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/include/kvs_adi.h line.1438
- KADI::kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/kernel_driver_adapter/kadi.h line.257
- ioctl

#### 2.2.2 udd->get

两种读路径（同步与异步），以同步为例。
- kv_nvme_read：声明位于KVSSD/PDK/core/src/api/include/udd/kvnvme.h line.265，定义位于uNVMe/driver/core/kv_interface.c line.340（注意到该函数定义在uNVMe目录下，属于用户空间驱动给上层的接口）
- nvme_dev_operations::read：uNVMe/driver/core/kv_driver.h line.66（函数指针）
- _kv_nvme_retrieve：uNVMe/driver/core/kv_cmd.h line.39（上述函数指针指向的实际调用函数，赋值位于uNVMe/driver/core/kv_driver.c的kv_nvme_init函数560行）
- spdk_nvme_kv_cmd_retrieve：KVSSD/PDK/core/src/api/include/udd/spdk/kvnvme_spdk.h line.124（再次回到KVSSD目录下）

后续是SPDK内部命令请求的转换处理等。

// To add

#### 2.2.3 emulator->get

- kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/include/kvs_adi.h line.1438
- kv_device_internal::kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_device.hpp line.176（给cmd加上opcode：KV_OPC_GET）
- kv_device_internal::submit_io：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_device.hpp line.94
- emul_ioqueue::enqueue：KVSSD/PDK/core/src/device_abstract_layer/include/private/queue.hpp line.113（设备IO队列）
- 经过队列的等待。
- io_cmd::execute_cmd：KVSSD/PDK/core/src/device_abstract_layer/include/private/io_cmd.hpp line.68（根据cmd的opcode进行函数处理）
- kv_namespace_internal::kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_namespace.hpp line.69
- kv_emulator::kv_retrieve：KVSSD/PDK/core/src/device_abstract_layer/include/private/kv_emulator.hpp line.119（到达emulator内部）
- emulator内部查找key对应的value，emulator通过两个kv_key* 映射到string的unordered_map来存储KV pair。查询语句：auto it = m_map[ks_id].find((kv_key*)key);

### 2.3 delete

// To add


