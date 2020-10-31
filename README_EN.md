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
    <img alt="releases" src="https://img.shields.io/badge/releases-v1.4.0-blue.svg?style=flat-square&longCache=true">
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
- [Handwer's Blog](https://blog.handwer-std.top/)
- [Mtaun](https://mtaun.top/)
- [杨云召](https://flywith24.gitee.io/)
- [汐语](https://xywangb.cn/)
- [Meizi's Blog](http://www.meizia.net/)
- [kilic の 部落格](https://kilicmu.github.io/)
- [Hexo](https://www.actor360.xyz/)
- [Live And Learn](https://kangshitao.github.io/)
- [Yin Blog](http://xuzhimo.top/)
- [CodeGorgeous](https://codegorgeous.github.io/)
- [卞卞不是便便](https://www.bianxr.com/)
- [你好我是王日天@](http://www.rt95.ink/)

（If you are using the zhaoo theme, welcome to show your blog, just add your blog to the `README.md` and PR.）

## Characteristic

- [x] Simple & Responsive & Animation
- [x] `highlight` code highlighting
- [x] `Gitalk`、`Valine`、`ChangYan` comment
- [x] `DaoVoice` IM
- [x] `FancyBox` lightbox
- [x] Dark scheme
- [x] `Pjax`
- [x] `lazyload`
- [x] `LeanCloud` statistical pv & uv
- [x] `Alipay, Wechat` donate
- [x] Galleries, pictures support waterfall
- [x] Motto, can use plugin `hexo-plug-motto`to achieve dynamic motto
- [x] `Baidu`、`CNZZ`、`google` analytics and SEO
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

It is recommended to refer to [_config.yml](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/_config.yml) and [_example](https://github.com/izhaoo/hexo-theme-zhaoo/tree/master/_example) for configuration

## Update

Jump to the theme directory：

```bash
$ cd themes/zhaoo
```

Get update from GitHub：

```bash
$ git pull
```

## Related

* Weapp：[hexo-weapp-zhaoo](https://github.com/izhaoo/hexo-weapp-zhaoo) (Weapp for Hexo)
* Plugin：[hexo-generator-restful](https://github.com/izhaoo/hexo-generator-restful) (RESTful API for Hexo)

## Stargazers

[![Stargazers over time](https://starchart.cc/izhaoo/hexo-theme-zhaoo.svg)](https://starchart.cc/izhaoo/hexo-theme-zhaoo)

## License

[MIT](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/LICENSE) License
