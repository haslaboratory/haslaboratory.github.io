---
layout: doc
title: 如何使用代码高亮？
order: 6
---

[Jekyll](jekyll.html)默认使用[Rouge](https://github.com/rouge-ruby/rouge)进行代码高亮。引入一段c++代码段的示例如下：

```liquid
​```c++
int main(void)
{
	printf("hello, world!\n");
	return 0;
}
​```
```

显示效果如下：

```c++
int main(void)
{
	printf("hello, world!\n");
	return 0;
}
```

## 语言列表

按照[本网站Jekyll文档](jekyll.html)正确安装本地运行环境后可以获得``rougify``命令（因为Jekyll默认使用Rouge）。

通过如下命令查询Rouge支持的编程语言列表：

```shell
bundle exec rougify list
```

或者也可以通过[这个](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers)网站查询。

## 配色方案

本网站使用如下命令生成配色方案：

```bash
bundle exec rougify style monokai > css/syntax.css
```

生成的配色方案需要在网站头部引用：

```html
<link rel="stylesheet" href="{{ site.baseurl }}/css/syntax.css">
```

配色方案的列表可以通过如下命令获取：

```
bundle exec rougify help style
```

可通过以上方法切换其他配色方案。