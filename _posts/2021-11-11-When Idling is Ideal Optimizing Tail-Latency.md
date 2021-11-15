---
layout: post
title: "Perséphone: 提升分散负载的尾延迟"
author: Aoxin Wei
tags:
 - SOSP
 - 2021
 - Schedule
 - Tail-Latency
---

# [When Idling is Ideal: Optimizing Tail-Latency for Highly-Dispersed Datacenter Workloads with Perséphone]()

## Introduction

The latency of requests can be different, some are in 2us and other like SCAN and EVAL can take 100+ us or 1+ ms.   
 A short request will block behind long requests. For instance that Google reports that machines spend most of their time in the 10-50% utilization range .   
Related work is aim to multiplex the shared resource such as congestion control schemes and CPU schedulers. 

**key insight**: take advantage of parallelism and abundance of cores to solve the long-tail problem. lets applications define request classifiers and uses these classifiers to dynamically profile the workload. Then use some reserved CPU cores to handle the short request workloads

## DARC Scheduling

protect short requests at backend servers by extracting their type, understanding their CPU demand, and dedicating enough resources to satisfy their demand.

**Challenge**:  
(1) predict how long each request type will occupy a CPU    
	low-overhead workload profiling
	queuing delay monitoring
(2) partition CPU resources among types while retaining the ability to handle bursts of
arrivals and minimizing CPU waste.
	enabling cycles stealing from shorter types to longer ones

**Scheduling model**  
dispatch cores to request type , then use the core to schedule the request of the type queue (first in first serve) but also steal core cycle from long request core

**Worker reservation**  
disperse requests into different groups depend on their service time.  
compute the core for each group and ensure  as-sign at least one worker to a group  
for the extra fractional request of each group, they can be handled by "spillwall" core or  steal from the long request core

## Perséphone architecture
![image](C:\Users\89317\Desktop\When Idling is Ideal Optimizing Tail-Latency for Highly-Dispersed Datacenter Workloads with Perséphone\1636699013281fKkCFQV9Iu.png)
1.worker takes packet from the network  
2.add user-defined  classifier wo request  
3.store request into type queues  
4.dispatcher give a request to a worker  
5.worker process the request and 6. response to the NIC and 7. dispatcher   

## evaluation
![image](C:\Users\89317\Desktop\When Idling is Ideal Optimizing Tail-Latency for Highly-Dispersed Datacenter Workloads with Perséphone\1636699600499fynglOYZUr.png)
compared to the d-FCFS and c-FCFS, the overall latency and short request latency in DARC decrease a lot