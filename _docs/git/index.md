---
title: Git版本管理
layout: doc
section: true
doc: 2
order: 200
---

## Git使用方法 

<font face="宋体" size=2>&nbsp;&nbsp;git与github不同，git是一个软件，能够帮助程序员更好的写程序，是一个版本管理的工具；github则是一个网站，主要是程序员之间互相交流和学习</font>

### 1.Git安装

#### Ubuntu

    sudo apt-get install git
#### Windows

<font face="宋体" size=2>&nbsp;&nbsp;直接从官网下载最新版本的[Git](https://git-scm.com/downloads)并进行安装即可。</font>  

### 2.Git配置

#### 用户信息

<font face="宋体" size=2>&nbsp;&nbsp;配置个人的用户名称和电子邮件地址：</font>  

    git config --global user.name "xx"
    git config --global user.email xx@yy.com

<font face="宋体" size=2>&nbsp;&nbsp;如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。</font>  

#### 文本编辑器

<font face="宋体" size=2>&nbsp;&nbsp;设置Git默认使用的文本编辑器, 一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：</font>  

    git config --global core.editor emacs

#### 查看配置信息

<font face="宋体" size=2>&nbsp;&nbsp;要检查已有的配置信息，可以使用 git config --list 命令：</font>  

    git config --list

<font face="宋体" size=2>&nbsp;&nbsp;也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可：</font> 

    git config user.name

### 3.Git工作流程

+ <font face="宋体" size=2>克隆 Git 资源作为工作目录。</font>   
+ <font face="宋体" size=2>在克隆的资源上添加或修改文件。</font>   
+ <font face="宋体" size=2>如果其他人修改了，你可以更新资源。</font>   
+ <font face="宋体" size=2>在提交前查看修改。</font>   
+ <font face="宋体" size=2>提交修改。</font>   
+ <font face="宋体" size=2>在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。</font>  

### 4.Git创建仓库
#### git init
<font face="宋体" size=2>&nbsp;&nbsp;Git 使用 git init 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 git init 是使用 Git 的第一个命令。在执行完成 git init 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。</font>  
 
<font face="宋体" size=2>&nbsp;&nbsp;使用当前目录作为Git仓库，我们只需使它初始化。</font>  
    
    git init

<font face="宋体" size=2>&nbsp;&nbsp;使用我们指定目录作为Git仓库。</font>  

    git init newrepo
<font face="宋体" size=2>&nbsp;&nbsp;初始化后，会在 newrepo 目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。</font>  

#### git clone

<font face="宋体" size=2>&nbsp;&nbsp;我们使用 git clone 从现有 Git 仓库中拷贝项目:</font>  

    git clone <repo>

<font face="宋体" size=2>&nbsp;&nbsp;如果我们需要克隆到指定的目录，可以使用以下命令格式:</font>  

    git clone <repo> <directory>

#### 配置
<font face="宋体" size=2>&nbsp;&nbsp;git的设置使用git config命令，显示当前git的配置信息：</font> 

    git config --list

<font face="宋体" size=2>&nbsp;&nbsp;git的设置使用编辑 git 配置文件:</font> 

    git config -e    # 针对当前仓库 
    git config -e --global   # 针对系统上所有仓库

<font face="宋体" size=2>&nbsp;&nbsp;设置提交代码时的用户信息：</font> 

    git config --global user.name "runoob"
    git config --global user.email test@runoob.com

### 5.Git基本操作

<font face="宋体" size=2>&nbsp;&nbsp;Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull。下面是一个简单的操作：</font>

    git init
    git add .
    git commit

+ <font face="宋体" size=2>git init - 初始化仓库。</font>
+ <font face="宋体" size=2>git add . - 添加文件到暂存区。</font>
+ <font face="宋体" size=2>git commit - 将暂存区内容添加到仓库中。</font>

#### 创建仓库命令

<style>
table th:nth-of-type(1) {
	width: 150px;
}
table th:nth-of-type(2) {
	width: 500px;
}
</style>

| 命令| 说明 | 
| :----------| :-----|
|<font face="Times New Romans" size=2>git init</font> | <font face="宋体" size=2>初始化仓库</font> | 
|<font face="Times New Romans" size=2>git clone</font> | <font face="宋体" size=2>拷贝一份远程仓库，也就是下载一个项目。</font> |  

#### 提交与修改

| 命令| 说明 | 
| :----------| :-----|
|<font face="Times New Romans" size=2>git add</font> | <font face="宋体" size=2>添加文件到仓库</font> | 
|<font face="Times New Romans" size=2>git status</font> | <font face="宋体" size=2>查看仓库当前的状态，显示有变更的文件。</font> | 
|<font face="Times New Romans" size=2>git diff</font> | <font face="宋体" size=2>比较文件的不同，即暂存区和工作区的差异。</font> | 
|<font face="Times New Romans" size=2>git commit</font> | <font face="宋体" size=2>提交暂存区到本地仓库。</font> | 
|<font face="Times New Romans" size=2>git reset</font> | <font face="宋体" size=2>回退版本。</font> | 
|<font face="Times New Romans" size=2>git rm</font> | <font face="宋体" size=2>删除工作区文件。</font> | 
|<font face="Times New Romans" size=2>git mv</font> | <font face="宋体" size=2>移动或重命名工作区文件。</font> | 

#### 提交日志

| 命令| 说明 | 
| :----------| :-----|
|<font face="Times New Romans" size=2>git log</font> | <font face="宋体" size=2>查看历史提交记录</font> | 
|<font face="Times New Romans" size=2>git blame&#60;file&#62;</font> | <font face="宋体" size=2>以列表形式查看指定文件的历史修改记录</font> | 

#### 远程操作



| 命令| 说明 | 
| :----------| :--------------|
|<font face="Times New Romans" size=2>git remote</font> | <font face="宋体" size=2>远程仓库操作</font> | 
|<font face="Times New Romans" size=2>git fetch</font> | <font face="宋体" size=2>从远程获取代码库</font> | 
|<font face="Times New Romans" size=2>git pull</font> | <font face="宋体" size=2>下载远程代码并合并</font> | 
|<font face="Times New Romans" size=2>git push</font> | <font face="宋体" size=2>上传远程代码并合并</font> | 

### 6.Git分支管理
<font face="宋体" size=2>&nbsp;&nbsp;几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</font>

    git branch (branchname)   创建分支
    git checkout (branchname) 切换分支命令
    git merge                 合并分支命令

#### 列出分支

    git branch
<font face="宋体" size=2>&nbsp;&nbsp;没有参数时，git branch会列出你在本地的分支。执行 git init 的时候，默认情况下Git就会为你创建 master分支。如果要手动创建一个分支。执行git branch (branchname)</font>

#### 删除分支

<font face="宋体" size=2>&nbsp;&nbsp;删除分支命令：</font>

    git branch -d (branchname)

#### 合并分支

<font face="宋体" size=2>&nbsp;&nbsp;一旦某分支有了独立内容，希望将它合并回到主分支。可以使用以下命令将任何分支合并到当前分支中去：</font>

    git merge (branchname)

### 7.Git查看提交历史
一般常用两个命令：

+ <font face="Times New Romans" size=2> git log</font> <font face="宋体" size=2>查看历史记录信息</font>
+ <font face="Times New Romans" size=2>git blame &#60;file&#62; </font><font face="宋体" size=2>以列表形式查看指定文件的历史修改记录</font>


### 8.Git标签

<font face="宋体" size=2>&nbsp;&nbsp;发布一个版本时，我们通常先在版本库中打一个标签（tag），这样就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。-a 选项意为"创建一个带注解的标签"。</font>

    git tag -a v1.0

<font face="宋体" size=2>&nbsp;&nbsp;查看标签：</font>

    git tag

<font face="宋体" size=2>&nbsp;&nbsp;指定标签信息命令：</font>

    git tag -a <tagname> -m "标签"
