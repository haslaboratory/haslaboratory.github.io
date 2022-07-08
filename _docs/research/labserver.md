---
layout: doc
title: 实验室可用计算存储资源 
permalink: /labserver.html
redirect_from: /docs/research/labserver.html
order: 10
---

# 资源列表

| 编号 | 型号           | IP             | 内存(GB) | CPU核数 |
|------|----------------|----------------|----------|---------|
| N1   | PowerEdge R620 | 10.144.247.120 | 8        | 8       |
| N2   | PowerEdge-R730 | 10.144.35.207  | 62       | 32      |
| N3   | PowerEdge R820 | 10.144.219.59  | 23       | 16      |
| PC   | xxx            | 10.144.197.178 | 15       | 4       |

# 部分资源展示
<center><img src=" ..//images/服务器.png " width="30%"></center>
<center><img src=" ..//images/服务器2.jpg " width="30%"></center>
<center><img src=" ..//images/开发板.jpg " width="30%"></center>


# 服务器在用人员

| 编号 | 人员       |            |   |   |
|------|------------|------------|---|---|
| N1   | chenzixiao |            |   |   |
| N2   | shiliu     | wujianfeng |   |   |
| N3   |            |            |   |   |
| PC   | shiliu     |            |   |   |

# zerotier运行命令记录

```bash
curl -s https://install.zerotier.com | sudo bash
zerotier-cli join a84ac5c10afe08ee
```

# [samba文件服务器](https://sites.google.com/site/devlibrary/linux/samba-wen-jian-fu-wu-qi-she-zhi-zui-jian-dan-pian-)

管理员：

1. 创建samba账号
```bash
sudo smbpasswd -a <username>
```
2. 配置samba conf，在文件`/etc/samba/smb.conf`底部添加如下内容，有几个用户就添加几个下面模板，将username换成具体的用户名
```bash
[username]
  path = /home/<username>
  available = yes
  browseable = yes
  public = no
  writable = yes
  valid users = <username>
  create mask = 0755
  directory mask = 0755
```
3. 重启samba
```bash
sudo /etc/init.d/smbd restart
```

管理员可设置免除认证的共享文件夹，步骤如下：
1. 创建共享samba账号
2. 配置samba conf如下：

```bash
[haslab]
  path = /home/haslab/share
  available = yes
  browseable = yes
  public = yes
  writable = yes
  create mask = 0777
  directory mask = 0777
  guest ok = yes
```
3. 设置共享文件夹可读可写权限，`sudo chmod -R 777 /home/haslab/share/`

用户：
1. 验证是否能登录samba文件服务器
- 在Windows上登录samba文件服务器：win+r，输入\\\\ip
- 在Mac上登录samba文件服务器：打开finder，然后command+k，输入samba://ip
2. [将文件服务器与磁盘驱动器映射](https://blog.csdn.net/hunanchenxingyu/article/details/9751639)，在Windows10，点击此电脑->映射网络驱动器。

![](..//images/2021-06-4-labserver/samba_driver.png)

