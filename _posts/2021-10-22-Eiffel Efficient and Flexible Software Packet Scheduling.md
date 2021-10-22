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

## introduction

Problem:

1.The need for programmable scheduling is increasing because of the more sophisticated policies

2.Cpu utilization of kernel packet pacing is up to 10 - 12% nowadays.



key insights:

1. Now scheduling policy that has m ranking functions associated with a packet typically requires m priority queues in which this packet needs to be enqueued and dequeued [49], which translates roughly to O(m logn) operations per packet for a scheduler with n packets enqueued.  
   The priority can be represented as integers and integer priority queues can have O(1) for packet insertion and extraction thus will make origin O(m logn) lower to the O(m) based on FFS(find first set CPU instruction)	(if we can introduce this promotion，it may get some benefit and how can we separate our work from theirs?)
2. packet scheduling programming models do not both support per-flow packet scheduling and reordering of packets on a dequeue operation   (I think the first one may be more related to our topics)



## Design

**FFS based queue**

![image-20211022160645476](C:\Users\89317\Desktop\Eiffel Efficient and Flexible Software Packet Scheduling\image-20211022160645476.png)

data in Bitmap Meta data:  
0 represents none in this priority queue and the opposite is 1.

use FFS(find first set) instruction to find max or min priority queue  
The FFS  background https://en.wikipedia.org/wiki/Find_first_set

**Hierarchical FFS-based queue**

![image-20211022162011380](C:\Users\89317\Desktop\Eiffel Efficient and Flexible Software Packet Scheduling\image-20211022162011380.png)

The reason why  Hierarchical FFS-based queue is confused to me.  
(FFS instruction only can find max or  min in 6 bit based on fig 2. And in order to control more priorities, multi-plane is introduced)



 **Circular Hierarchical FFS-based queue**

![image-20211022162213322](C:\Users\89317\Desktop\Eiffel Efficient and Flexible Software Packet Scheduling\image-20211022162213322.png)

One word bitmap may still not undertake the mount of priority queues and Circular Hierarchical FFS-based queue  can handle this issue. Read the paper to learn this design



## Thought

This paper is a NSDI 19 paper, the reason why I read this paper is to find some scheduling design for the scheduling of LINUX IO stack.

However, what I learn from this paper is not  a  concrete algorithm for mutil-queue scheduling  but a software scheduling model suited for any mutil-queue scheduling policy. In my opinion, FFS-based priority will be Beneficial to our design with no doubt but cannot solve our key problem. And Eiffel's source code cannot be found, it may not worthy to do it. We can use some open-source programmable scheduling model like PIFO as our basic data structure instead which may help per-flow scheduling or just introduce FFS-based priority queues.
