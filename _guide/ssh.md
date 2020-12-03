---
layout: collection
title: SSH使用方法
order: 203
---

SSH是用于远程登陆Linux的常用协议。其最常用的开源实现是[OpenSSH](http://www.openssh.com/)。在Debian/Ubuntu中，一般ssh的客户端和服务器端都是默认安装的。如果没有，可以通过``apt install sshd``安装服务器端，通过``apt install sshd``安装客户端。

在老版本的Windows中，可以使用[Putty](https://www.putty.org/)做客户端。而在[Windows 10中已经集成了SSH客户端](https://docs.microsoft.com/en-us/windows/terminal/tutorials/ssh)，所以可以直接在命令行发起远程连接。

很多应用都使用SSH作为底层协议。例如，[Git](git.html)、[VSCode Remote](https://code.visualstudio.com/docs/remote/remote-overview)、[Hadoop](http://hadoop.apache.org/)。这里简单介绍SSH的使用和配置方法。

## 使用

SSH的使用非常简单只需要按如下格式指定要登陆的服务器：

```shell
ssh [用户名]@[服务器]:[端口]
```

其中，服务器可以是域名或IP地址；端口如果是默认的20端口则可以省略。

## 简单配置

记住用服务器通常很困难，特别是当我们使用IP地址登录的时候。如果我们有多个服务器要管理，记住那么多用户名也不那么容易。这时可以利用SSH配置文件给服务器起一个别名。不论是Linux还是Windows，配置文件都位于``~/.ssh/config``。通过添加如下内容，可以设置别名(nickname)：

```
Host nickname
    HostName server.ip
    User username
```

**注意**，SSH配置文件生效必须阻止其它账户获得文件的查看或修改权限。可以通过如下命令保证相关文件拥有正确权限：

```shell
chmod og-rw .ssh .ssh/*
```

配置正确后，就可以通过别名登陆服务器了：

```shell
ssh nickname
```

## 免密码登陆

免密码登陆利用RSA等非对称密钥登陆服务器，可以给操作带来非常多的方便。为了做到这，我们需要通过``ssh-keygen``生成一个密钥对。``ssh-keygen``命令会询问相关信息，这里建议可以一路无脑回车。如果对具体``ssh-keygen``有哪些额外的参数感兴趣可以进一步查询相关文档。一路无脑回车后，我们会得到两个文件：

```
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
```

带``.pub``后缀名的是我们的公钥，可以放心给人看。``id_rsa``是我们的密钥，一定要保护好。为了免密码登陆，我们需要将公钥放到要登陆的服务器上。

```
scp ~/.ssh/id_rsa.pub nickname:~/.ssh/authorized_keys
```

**注意**，该命令会直接替换``authorized_keys``。如果，想授权给多个公钥，我们要将多个公钥存放到``authorized_keys``，每一行存一个。

```shell
scp ~/.ssh/id_rsa.pub nickname:~
ssh nickname
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
```

**注意**，如果服务器或本地任何SSH相关文件的权限不合适，都可能导致无法正常登陆。
