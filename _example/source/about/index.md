---
title: 关于
date: 2019-12-26 12:54:27
image: /images/theme/post-image.jpg
---

# hexo-theme-zhaoo

一款简约的 Hexo 主题

## 预览

- [zhaoo's Blog](https://www.izhaoo.com)
- [CodeGorgeous](https://codegorgeous.github.io/)
- [你好我是王日天@](http://www.rt95.ink/)
- [卞卞不是便便](https://www.bianxr.com/)
- [Yin Blog](http://xuzhimo.top/)

（如果您正在使用 zhaoo 主题，欢迎展示您的博客哦，只需在 `README.md` 文件中加入您的博客，提交 PR 即可。）

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

## 截图

![预览](./screenshots/preview.png)

![首页](./screenshots/index.png)

![文章](./screenshots/article.png)

![相册](./screenshots/galleries.png)

## 安装

安装 Hexo 后进入根目录：

```bash
$ cd hexo
```

安装 zhaoo 主题：

```bash
$ git clone https://github.com/izhaoo/hexo-theme-zhaoo.git themes/zhaoo
```

## 使用

修改 Hexo 根目录下的 `_config.yml` 文件启用 zhaoo 主题：

```yml
theme: zhaoo
```

建议将文章数量改为**9**篇，启用代码高亮效果：

```yml
index_generator:
  path: ''
  per_page: 9
  order_by: -date

highlight:
  enable: true
  line_number: true
  auto_detect: true
  hljs: true
  tab_replace:
```

启动 Hexo 服务器预览：

```bash
$ hexo clean && hexo s
```

## 配置

修改主题目录下的 `_config.yml` 文件，配置相关功能：

建议参考 [_config.yml](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/_config.yml) 进行配置

## 更新

移动到 zhaoo 主题目录：

```bash
$ cd themes/zhaoo
```

从 GitHub 获取更新：

```bash
$ git pull
```

## 协议

[MIT](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/LICENSE) License