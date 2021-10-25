---
layout: post
title: "Eiffel: 高效灵活的软件包调度"
author: Aoxin Wei
tags:
 - NSDI
 - 2019
 - Computer Network
 - Priority Queue Scheduling
---

# [Eiffel: Efficient and Flexible Software Packet Scheduling]()

## Introduction

Problem:

1. The need for programmable scheduling is increasing because of the more sophisticated policies

2. Cpu utilization of kernel packet pacing is up to 10 - 12% nowadays.



Key Insights:

1. Now scheduling policy that has m ranking functions associated with a packet typically requires m priority queues in which this packet needs to be enqueued and dequeued, which translates roughly to O(m logn) operations per packet for a scheduler with n packets enqueued.  
   The priority can be represented as integers and integer priority queues can have O(1) for packet insertion and extraction thus will make origin O(m logn) lower to the O(m) based on FFS(find first set CPU instruction)	(if we can introduce this promotion，it may get some benefit and how can we separate our work from theirs?)
2. packet scheduling programming models do not both support per-flow packet scheduling and reordering of packets on a dequeue operation   (I think the first one may be more related to our topics)



## Design

**FFS based queue**

![image](/images/2021-10-22-Eiffel%20Efficient%20and%20Flexible%20Software%20Packet%20Scheduling/image-20211022160645476.png)

data in Bitmap Meta data:  
0 represents none in this priority queue and the opposite is 1.

use [FFS (find first set) instruction](https://en.wikipedia.org/wiki/Find_first_set) to find max or min priority queue  

**Hierarchical FFS-based queue**

![image](/images/2021-10-22-Eiffel%20Efficient%20and%20Flexible%20Software%20Packet%20Scheduling/image-20211022162011380.png)

The reason why  Hierarchical FFS-based queue is confused to me.  
(FFS instruction only can find max or  min in 6 bit based on fig 2. And in order to control more priorities, multi-plane is introduced)



 **Circular Hierarchical FFS-based queue**

![image](/images/2021-10-22-Eiffel%20Efficient%20and%20Flexible%20Software%20Packet%20Scheduling/image-20211022162213322.png)

One word bitmap may still not undertake the mount of priority queues and Circular Hierarchical FFS-based queue  can handle this issue. Read the paper to learn this design



## Thought

This paper is a NSDI 19 paper, the reason why I read this paper is to find some scheduling design for the scheduling of LINUX IO stack.
However, what I learn from this paper is not  a  concrete algorithm for mutil-queue scheduling  but a software scheduling model suited for any mutil-queue scheduling policy.
