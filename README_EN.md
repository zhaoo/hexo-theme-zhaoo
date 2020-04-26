<div align="right">
  语言:
  <a title="简体中文" href="https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/README.md">🇨🇳</a>
  <a title="English" href=".https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/README_EN.md">🇺🇸</a>
</div>

# zhaoo

[![releases](https://img.shields.io/badge/releases-v1.0.0-blue?style=flat-square&longCache=true)](https://github.com/izhaoo/hexo-theme-zhaoo/releases)
[![hexo](https://img.shields.io/badge/hexo-%3E=4.0.0-blue?style=flat-square&logo=hexo&longCache=true)](https://hexo.io)
[![node](https://img.shields.io/badge/node-%3E=10.9.0-green?style=flat-square&logo=Node.js&longCache=true)](https://nodejs.org)
[![license](https://img.shields.io/badge/license-MIT-green?style=flat-square&longCache=true)](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/LICENSE)

«zhaoo» is a simple theme for Hexo.

## Rreview

- [zhaoo's Blog](https://www.izhaoo.com)

（If you are using the zhaoo theme, welcome to show your blog, just add your blog to the `README.md` and PR.）


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