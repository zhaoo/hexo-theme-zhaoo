---
title: hexo-theme-zhaoo
date: 2020-01-30 16:17:14
tags: [Hexo, 主题]
keywords: hexo-theme-zhaoo, zhaoo, hexo, 主题, theme, 简约, 响应式
categories:
- 项目
image: /images/theme/post-image.jpg
top: 100
---

一款简约的 `Hexo` 主题。

<!--more-->

## GitHub

[GitHub](https://github.com/izhaoo/hexo-theme-zhaoo)

## 预览

- [zhaoo's Blog](https://www.izhaoo.com)
- [CodeGorgeous](https://codegorgeous.github.io/)
- [你好我是王日天@](http://www.rt95.ink/)
- [卞卞不是便便](https://www.bianxr.com/)

## 特性

- [x] 简约 & 响应式 & 动效
- [x] `highlight` 代码高亮
- [x] `Gitalk` 评论
- [x] `FancyBox` 图片灯箱
- [x] `Pjax` 无刷新加载
- [x] `lazyload` 图片懒加载
- [x] `LeanCloud` 统计访问量
- [x] `支付宝、微信` 打赏
- [x] 相册页面，图片支持瀑布流加载（`justifiedGallery`）
- [x] 格言，可配合插件 `hexo-plug-motto` 实现动态格言
- [x] 定制 `主题风格`、`CDN`、`埋点脚本`、`社交链接`、`版权说明` 等

# 文章演示

### 文本

一个`幽灵`，共产主义的`幽灵`，在欧洲游荡。为了对这个`幽灵`进行神圣的围剿，旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进派和德国的警察，都联合起来了。

使用 <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>ESC</kbd> 打开任务管理器

### 图片

![图片测试](/images/theme/post-image.jpg "图片测试")

### 代码

```javascript
'use strict';
var pagination = require('hexo-pagination');
module.exports = function(locals){
  var config = this.config;
  var posts = locals.posts;
    posts.data = posts.data.sort(function(a, b) {
      if(a.top && b.top) {
        if(a.top == b.top) return b.date - a.date;
        else return b.top - a.top;
      }
      else if(a.top && !b.top) {
        return -1;
      }
      else if(!a.top && b.top) {
        return 1;
      }
      else return b.date - a.date;
    });
  var paginationDir = config.pagination_dir || 'page';
  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
```

### 链接

[普通链接](/images/theme/post-image.jpg)

<https://www.izhaoo.com>

### 段落

##### 字体

*斜体文本*

**粗体文本**

***粗斜体文本***

##### 线条

***

~~删除线~~

<u>下划线</u>

### 列表

##### 无序列表

* 第一项
* 第二项
* 第三项

##### 有序列表

1. 第一项
2. 第二项
3. 第三项

##### 嵌套列表

1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

### 区块

> 区块引用

### 表格

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

### 标题

# 一级

## 二级

### 三级

#### 四级

##### 五级

###### 六级

# 开发日志

### 2019.12.02

* Add 创建项目
* Add 完成部分功能

### 2019.12.03

* Add 新增基础分页功能
* Add 新增图片灯箱效果 (FancyBox)
* Add 新增页面跳转效果 (pjax)

### 2019.12.04

* Add 配置项新增插件配置、CDN配置
* Fix 修复pjax与其他插件之间的冲突

### 2019.12.12

* Add 新增文章置顶功能
* Fix 修复文章列表摘录截断Bug

### 2019.12.13

* Add 新增代码高亮功能 (Highlight)
* Add 新增文章评论功能 (Gitalk)
* Add 新增文章标签功能
* Add 新增文章导航功能
* Fix 图片不可拖拽
* Fix 新增区块样式

### 2019.12.14

* Add 新增阅读量统计功能 (LeanCloud)
* Add 新增文章内容字数统计功能

### 2019.12.17

* Add 配置项新增菜单配置
* Add 新增用户代码配置

### 2019.12.23

* Add 头部新增水波模式

### 2020.01.26

* Add 新增归档页面
* Add 新增页面底部（社交、版权）

### 2020.01.27

* Add 新增捐赠功能
* Fix 页面底部设计按钮自定义选中颜色
* Fix 配置项CDN配置支持iconfont

### 2020.01.28

* Fix 新增查看评论按钮

### 2020.01.29

* Add 一言支持外部API引入，需配合“hexo-plug-motto”插件使用
* Fix 配置项支持颜色配置

### 2020.03.26

* Fix 菜单关闭按钮样式美化

### 2020.04.26

* Fix 侧边按钮优化
* Fix README.md 标准化

### 2020.04.29

* Add 新增标签云（tags）和标签（tag）

### 2020.04.20

* Add 新增分类（category）

### 2020.05.01

* Add 新增图片懒加载
* Fix 优化loading动画

### 2020.05.02

* Fix 修复Fancybox与lazyload之间的bug

### 2020.05.04

* Add 新增相册页面
* Add 部分页面新增头部标题
* Fix 合并部分样式

### 2020.05.05

* Add 新增主题使用文档
* Fix 修复独立页面标题

### 2020.05.07

* Add CSS 和 JS 埋点
* Fix lazyload 的一些兼容问题

### 2020.05.08

* Fix lazyload 与 相册 的一些兼容问题

### 2020.05.10

* Add 新增一些统计脚本
* Fix favicon
* Fix _config.yml 规范化

### 2020.05.15

* Fix fab 增加可选配置

### 2020.05.26

* Add valine 评论
* Add 畅言评论
* Fix 整合评论配置