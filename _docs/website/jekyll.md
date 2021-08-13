---
layout: doc
title: 如何使用Jekyll？
order: 2
---

本站使用[Jekyll](https://jekyllrb.com/)生成。若要进行本地调试请参考以下文档安装。

# Jekyll使用方法

&nbsp;&nbsp;一种简单静态博客生成器，用于将纯文本转换为静态博客网站。

  - [1. Jekyll的安装](#1-jekyll的安装)
    - [1.1 Windows 10环境下安装Jekyll](#11-windows-10环境下安装jekyll)
    - [1.2 Ubuntu环境下安装Jekyll](#12-ubuntu环境下安装jekyll)
  - [2. 快速开始](#2-快速开始)
  - [3. 目录结构](#3-目录结构)
  - [4. 配置修改](#4-配置修改)
    - [4.1 预览地址](#41-预览地址)
    - [4.2](#42)
  - [5. 编写博客](#5-编写博客)
  - [6.](#6)
  - [7.](#7)
  - [参考文档](#参考文档)

---
## 1. Jekyll的安装

### 1.1 Windows 10环境下安装Jekyll

- 下载Ruby
  - 版本至少为2.4
  - 官方网址 (https://rubyinstaller.org)
  - 笔者使用的是rubyinstaller-devkit-2.6.6-2-x64 ([点此下载](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.6-2/rubyinstaller-devkit-2.6.6-2-x64.exe))
- 下载Python
  - 官方网址 (https://www.python.org)
  - 笔者使用的是python-3.9.0-amd64 ([点此下载](https://www.python.org/ftp/python/3.9.0/python-3.9.0-amd64.exe))
  - 需要在安装过程中将Python加入路径  
    <div style="align: center"><img alt="Python Install" src="..//images/Jekyll/2020-12-08-python_install.png" width="226x"></div>
- 下载Jekyll和bundler
  - 启动命令行窗口 (Win+R，输入cmd后确定)
  - `gem install jekyll bundler`

### 1.2 Ubuntu环境下安装Jekyll

- 下载Ruby 
  - 版本至少为2.4，apt下载的版本为2.0
  - 笔者使用的是Ruby2.5.0，安装流程：
    - `wget https://cache.ruby-lang.org/pub/ruby/2.5/ruby-2.5.0.tar.bz2`
    - `./configure --enable-shared --disable-install-doc`
    - `sudo make`
    - `sudo make install`
- 下载Python
  - `sudo apt install python`
- 下载Jekyll和bundler
  - `sudo gem install jekyll bundler`

若无管理员权限，可安装至用户目录：

```bash
gem install --user-install bundler jekyll
```

安装至用户目录后需要在``~/.profile``中添加路径：

```bash
if [ -d "$HOME/.gem/ruby/2.7.0/bin" ] ; then
    PATH="$HOME/.gem/ruby/2.7.0/bin:$PATH"
fi
```

若安装过程出现如下错误，则需要安装ruby开发者版本（``sudo apt install ruby-dev``）：

```
mkmf.rb can't find header files for ruby at /usr/lib/ruby/include/ruby.h

You might have to install separate package for the ruby development
environment, ruby-dev or ruby-devel for example.

extconf failed, exit code 1
```

### 安装依赖

对本网站进行本地编译前还需要通过``bundle``命令安装相应的依赖包。如果没有权限，需要提前指定安装依赖包至用户目录：

```bash
bundle config set --local path ~/.gem
```

安装依赖包的命令非常简单：

```bash
bundle install
```

最后，可通过``bundle exec jekyll serve``命令启动本地调试。若遇端口占用，通过参数``--port=[PORT]``修改；若需远程访问，通过参数修改``--host=[HOST]``。

## 2. 快速开始

- `jekyll new <PATH>`
  - 在指定路径安装一个新的 Jekyll 站点，路径不为空可以使用 --force 强制执行。
- `cd <PATH>`
- `bundle install`
- `bundle exec jekyll serve`
  - 在本地预览服务中编译站点，可以通过默认网址 [localhost:4000](http://localhost:4000) 访问。若想要后台运行，可以添加 --detach。
- 示例博客首页：  
  <div style="align: center"><img alt="Jekyll Example" src="..//images/Jekyll/2020-12-08-jekyll_example.png" width="400x"></div>

## 3. 目录结构

- Jekyll 的目录结构一般是这个样子：  
  <div style="align: center"><img alt="Structure" src="..//images/Jekyll/2020-12-08-structure.png" width="400x"></div>


| 文件/文件夹  |    说明    | 
| :--------:   | :--------  |
|**_config.yml** | 存储配置数据。这些配置中的许多选项都可以从命令行中指定，但在这里指定它们更加容易，并且你不必记住它们。 | 
|**_drafts** | 草稿是未发布的文章。这些文件的命名格式是没有日期的：**title.MARKUP**。| 
|**_includes** | 这些部分可以与你的布局及博客混合并匹配，以方便重用。 Liquid标签 {％include file.ext％} 可用于包含在 **_includes/file.ext** 中的内容。| 
|**_layouts** | 这些是包装文章的模板。在YAML Front Matter中逐层选择布局。Liquid标签 {{ content }}用于将内容注入网页。| 
|**_posts** | 这里是你的动态内容。这些文件的命名必须遵循以下格式：**YEAR-MONTH-DAY-title.MARKUP**。可以为每篇文章指定固定链接，但日期和MARKUP语言完全由文件名决定。| 
|**_data** | 格式良好的网站数据应该放在这里。Jekyll引擎将自动加载该目录中的所有数据文件（使用.yml，.yaml，.json或.csv格式和扩展名），并且可以通过site.data访问它们。如果目录下有文件members.yml，则可以通过site.data.members访问该文件的内容。| 
|**_sass** | 这些是可以导入到main.scss中的sass部分，然后将它们处理成一个样式表main.css，该样式表定义了你的网站使用的样式。| 
|**_site** | 这是Jekyll完成转换后，生成的网站将被存放的（默认）位置。建议将它添加到.gitignore文件中。| 
|**.jekyll-metadata** | 临时文件，这些将帮助Jekyll追踪自上次构建站点后哪些文件未被修改，以及哪些文件需要在下一个版本中重新生成。该文件不会包含在生成的网站中。建议将它添加到.gitignore文件中。| 
|**index.html**等文件 | 假设该文件具有YAML Front Matter部分，它将由Jekyll进行转换。网站根目录中的任何.html，.markdown，.md或.textile文件或上面未列出的目录也会发生同样的情况。| 
|其他 | 除了上面列出之外的其他文件夹和文件（例如css和images文件夹，favicon.ico文件等），将会被逐字复制到生成的网站中。| 


## 4. 配置修改

### 4.1 预览地址

- 开发环境的默认预览地址是 http://localhost:4000，如果想要构建别的地址，请在 **_config.yml** 中设置生产环境 url 如 http://example.com，并执行 `JEKYLL_ENV=production bundle exec jekyll build`。

### 4.2 

## 5. 编写博客

## 6. 

## 7. 

## 参考文档

[Jekyll使用教程笔记](https://juejin.cn/post/6844903623567081486)  
[如何使用Jekyll+GitHub Pages搭建个人博客站点](https://blog.csdn.net/u010454030/article/details/79908682)  
[用 jekyll + Github Pages搭建个人博客](https://blog.csdn.net/u013553529/article/details/54588010) 
