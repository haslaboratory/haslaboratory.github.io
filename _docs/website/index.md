---
title: 网站建设
layout: doc
section: true
doc: 3
order: 1
---

这里整理本网站开发、建设、部署、撰写等相关文档。本网站通过[Jekyll](/jekyll.html)生成，并通过[Git](../tools/git.html)管理源码。

网站发布前请通过如下命令预览（确保已[安装Jekyll](jekyll.html)）：

```shell
bundle exec jekyll serve --host localhost --port 4040
```

Ubuntu/Debian下直接尝试下面命令一键安装+测试：

```
bin/serve
```

## 编译Scala.js

```
sbt fullOptJS::webpack
```
