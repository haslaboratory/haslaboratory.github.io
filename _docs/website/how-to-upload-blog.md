---
layout: doc
title: 如何上传博客？
order: 7
---

# 博客格式

博客文章位于``_posts``目录下，需要以Jekyll格式命名，如``2021-01-01-XXX.md``。博客需使用如下文件头：

```
---
layout: post
title: "XXX"
author: XX
tags:
 - FAST
 - 2021
 - XXX
 - XXX
---
```

# 如何上传

首先需要将has-lab账号下的has-lab.github.io仓库fork到自己的账号下。

![fork](..//images/how-to-upload-blog/fork.png)

然后在自己账号的仓库里进行对应修改，如在``_posts``目录下添加博客文章，在``images``对应目录下添加图片等。

之后在Pull requests标签下，点击**New pull request**按钮，发起合并申请。

![New pull reqeust](..//images/how-to-upload-blog/new_pull_request.png)

确定合并的源仓库分支、目标仓库分支、合并修改的文件无误后，点击**Create pull request**按钮，等待仓库其他成员进行Review。

# 如何Review

博客仓库所属成员可以review其他成员的pull request并merge。

在博客仓库下，点进其他成员的pull request，在Files changed标签下审阅其代码，确认没有问题后可以点击**Review changes**按钮，点击其中的Approve选项后再点**Submit review**按钮。

![Review changes](..//images/how-to-upload-blog/review.png)

最后点击**Merge pull request**及之后出现的**Confirm merge**按钮，完成Review及Merge。

![Merge pull request](..//images/how-to-upload-blog/merge.png)