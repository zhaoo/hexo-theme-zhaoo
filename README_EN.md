<div align="right">
  Language:
  <a title="简体中文" href="https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/README.md">🇨🇳</a>
  <a title="English" href="https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/README_EN.md">🇺🇸</a>
</div>

<div align="center">
  <a href="https://github.com/izhaoo/hexo-theme-zhaoo/" target="_blank" rel="noopener noreferrer">
    <img src="./source/images/icons/zhaoo-logo.png" alt="zhaoo logo" width="100">
  </a>
</div>

<h3 align="center">A simple theme for Hexo</h3>  

<div align="center">
  <a href="https://github.com/izhaoo/hexo-theme-zhaoo/releases" target="_blank" rel="noopener noreferrer">
    <img alt="releases" src="https://img.shields.io/badge/releases-v1.1.0-blue.svg?style=flat-square&longCache=true">
  </a>
  <a href="https://hexo.io" target="_blank" rel="noopener noreferrer">
    <img alt="hexo" src="https://img.shields.io/badge/hexo-%3E=4.0.0-blue.svg?style=flat-square&logo=hexo&longCache=true">
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
    <img alt="node" src="https://img.shields.io/badge/node-%3E=10.9.0-green.svg?style=flat-square&logo=Node.js&longCache=true">
  </a>
  <a href="(https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&longCache=true">
  </a>
</div>

## Rreview

- [zhaoo's Blog](https://www.izhaoo.com)
- [CodeGorgeous](https://codegorgeous.github.io/)
- [你好我是王日天@](http://www.rt95.ink/)
- [卞卞不是便便](https://www.bianxr.com/)
- [Yin Blog](http://xuzhimo.top/)

（If you are using the zhaoo theme, welcome to show your blog, just add your blog to the `README.md` and PR.）

## Characteristic

- [x] Simple & Responsive & Animation
- [x] `ZUI (zhaoo UI)` (building)
- [x] `highlight` code highlighting
- [x] `Gitalk` comment
- [x] `FancyBox` lightbox
- [x] `Pjax`
- [x] `lazyload`
- [x] `LeanCloud` statistical pv & uv
- [x] `Alipay, Wechat` donate
- [x] Galleries, pictures support waterfall (`justifiedGallery`)
- [x] Motto, can use plugin `hexo-plug-motto`to achieve dynamic motto
- [x] Customized `Theme Style`、`CDN`、`Embedded Script`、`Social Link`、`Copyright` and more

## Screenshots

![preview](./screenshots/preview.png)

![index](./screenshots/index.png)

![article](./screenshots/article.png)

![galleries](./screenshots/galleries.png)

## Install

After installing Hexo, go to the root directory:

```bash
$ cd hexo
```

To install zhaoo themes:

```bash
$ git clone https://github.com/izhaoo/hexo-theme-zhaoo.git themes/zhaoo
```

## Use

Modify the file `_config.yml` in the Hexo root directory to enable the zhaoo theme:

```yml
theme: zhaoo
```

It is recommended to change the number of articles to **9** and enable code highlighting:

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

Start preview of Hexo server:

```bash
$ hexo clean && hexo s
```

## Config

Modify the file `_config.yml` in the theme directory to configure related functions:

It is recommended to refer to [_config.yml](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/_config.yml) for configuration

## Update

Jump to the theme directory：

```bash
$ cd themes/zhaoo
```

Get update from GitHub：

```bash
$ git pull
```

## License

[MIT](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/LICENSE) License