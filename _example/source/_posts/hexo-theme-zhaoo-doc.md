---
title: zhaoo - 主题使用文档
date: 2020-05-05 09:29:54
tags: [Hexo, 主题]
keywords: hexo-theme-zhaoo, zhaoo, hexo, 主题, 使用文档, document
categories:
- 项目
image: /images/theme/post-image.jpg
top: 10
---

`zhaoo` 主题的一些使用指北。

<!-- more -->

### 快速开始

##### 主题安装

安装 Hexo 后进入根目录：

```bash
$ cd hexo
```

安装 zhaoo 主题：

```bash
$ git clone https://github.com/izhaoo/hexo-theme-zhaoo.git themes/zhaoo
```

##### 开启主题

修改 Hexo 根目录下的 `_config.yml` 文件启用 zhaoo 主题：

```yml
theme: zhaoo
```

启动 Hexo 服务器预览：

```bash
$ hexo clean && hexo s
```

##### 主题配置

编辑 `Hexo` 根目录下的 `_config.yml` 文件，配置博客网站相关功能，对整个网站生效。

建议将文章数量改为**9**篇：

```yml
index_generator:
  path: ''
  per_page: 9  #文章数量改为9篇（3的倍数更和谐）
  order_by: -date
```

启用代码高亮效果：

```yml
highlight:
  enable: true  #启用代码高亮效果
  line_number: true
  auto_detect: true
  hljs: true
  tab_replace:
```

编辑 `zhaoo` 主题目录下的 `_config.yml` 文件，配置主题相关功能，只对主题生效。

建议参考 [_config.yml](https://github.com/izhaoo/hexo-theme-zhaoo/blob/master/_config.yml) 和本文进行配置，具体配置内容见下文。

##### 主题更新

进入到 zhaoo 主题目录：

```bash
$ cd themes/zhaoo
```

从 GitHub 获取更新：

```bash
$ git pull
```

### 网站部署

##### 第三方图床

##### 域名绑定

##### GitHub Page

##### 个人服务器

### 基础配置

##### Favicon

在主题配置文件中可设置 `Favicon` 图标，建议使用 `ico` 格式：

```yml
favicon: /image/favicon.ico  #设置Favicon
```

##### 关键词

在文章 `Front-matter` 中添加 `keywords` 字段设置关键词：

```markdown
title: zhaoo - 主题使用文档
keywords: hexo-theme-zhaoo, hexo, 主题, 使用文档, document
```

也可以在主题配置文件中为网站设置全局关键词，每个页面都会渲染，文章中无需重复添加：

```yml
keywords: zhaoo  #网站关键词
```

##### 版权信息

页面底部显示网站版权信息，在主题配置文件中可自定义文本内容（可以使用` HTML` 标签）：

```yml
copyright: <p>Copyright© 2019-2020 | <a target="_blank" href="https://www.izhaoo.com">zhaoo</a> .AllRightsReserved</p>
```

##### 文章封面

可以为每篇文章设置单独的文章封面图片，在文章 `Front-matter` 中添加 `image` 字段设置图片。

若使用图床，直接添加图片文件的 **完整URL** 即可：

```markdown
---
title: zhaoo - 主题使用文档
image: /images/theme/post-image.jpg  #设置图床图片
---
```

若将图片储存在本地，现将图片文件复制到主题 `~/zhaoo/source/image` 下，再添加 **相对URL** 即可：

```markdown
---
title: zhaoo - 主题使用文档
image: /image/20200421200902.jpg  #设置本地图片
---
```

不添加封面图片时，会显示默认图片。默认图片可以在主题配置文件中设置：

```yml
post_image: /image/post-image.jpg  #设置默认封面图片
```

##### 展示页面

首页展示页面。在主题配置文件中设置，可以设置 **是否开启** 和 **效果模式** ：

```yml
preview:
  enable: true  #是否开启展示页面
  type: wave   #效果模式，wave 或 cloud
```

若关闭展示页面，**欢迎图片** 和 **格言** 也不会显示。

效果模式有两种：波浪（wave） 和 云层（cloud）。

##### 欢迎图片

展示页面中可以自定义欢迎图片。在主题配置文件中设置，也可以使用 **完整URL** 或 **相对URL** 两种方式：

```yml
welcome_image: /image/welcome-image.jpg  #设置欢迎图片
```

##### 格言

展示页面中可以自定义格言。在主题配置文件中设置，在 `default` 项中填写格言，开启静态格言：

```yml
motto:
  default: 我在开了灯的床头下，想问问自己的心啊。  #设置静态格言
```

也可以设置动态格言（就是随机切换，一言），在 `api` 项中填写格言API即可，需配合 `hexo-plugin-motto` 插件使用，后文单独介绍。

```yml
motto:
  api: 'http://localhost:3000/api/motto'  #设置动态格言
```

##### 主题颜色

可以根据个人喜好，定制主题颜色。在主题配置中设置，可以使用 `十六进制`、`rgba`、`颜色名称` 方式，注意需要用引号包裹。

`default` 字段表示基础颜色，一般是文字颜色； `link` 字段表示选中颜色，一般是 `hover` 颜色。

```yml
color:
  default: "#33333D"
  link: "#FFBE5B"
```

##### 导航菜单

1. 在主题配置文件中配置 `menu` 项，用 `||` 将内容分割为两部分，前面部分为页面URL，后面部分为菜单中显示的名字，示例如下：

   ```yml
  menu:
    home: / || 首页
    galleries: /galleries || 摄影
    archives: /archives || 归档
    tags: /tags || 标签
    categories: /categories || 分类
    about: /about || 关于
   ```

2. 对于系统默认页面，如 `归档（/archives）`、`首页（/）` 等，直接添加菜单即可；对于独立页面，如 `标签（tags）`、`分类（categories）`，需创建页面后再添加菜单。

##### 归档页面

直接在主题配置文件中配置 `menu` 项，设置归档页导航即可，系统会按文章创建时间自动归档。

```yml
menu:
  archives: /archives || 归档
```

##### 标签页面

1. 执行以下命令创建标签页面，会在 `source` 目录生成 `tags/index.md` 文件：

  ```bash
  hexo new page tags  #创建标签页面
  ```
2. 打开 `source/tags/index.md` 文件，设置 `Front-matter` ，开启标签页面：

  ```markdown
  ---
  title: 标签
  type: "tags"
  layout: "tags"
  ---
  ```

3. 在主题配置文件中设置 `menu` 项，设置标签页导航 ：

  ```yml
  menu:
    tags: /tags || 标签
  ```

4. 在文章的 `Front-matter` 中使用 `tags` 字段添加标签即可：

  ```markdown
  ---
  title: zhaoo - 主题使用文档
  date: 2020-05-05 09:29:54
  tags: [Hexo, 主题]  #设置标签
  ---
  ```

##### 分类页面

同标签页面，更改一些关键词即可。

1. 执行以下命令创建分类页面，会在 `source` 目录生成 `categories/index.md` 文件：

  ```bash
  hexo new page categories  #创建分类页面
  ```
2. 打开 `source/categories/index.md` 文件，设置 `Front-matter` ，开启分类页面：

  ```markdown
  ---
  title: 标签
  type: "categories"
  layout: "categories"
  ---
  ```

3. 在主题配置文件中设置 `menu` 项，设置分类页导航 ：

  ```yml
  menu:
    categories: /categories || 分类
  ```

4. 在文章的 `Front-matter` 中使用 `categories` 字段添加标签即可：

  ```markdown
  ---
  title: zhaoo - 主题使用文档
  date: 2020-05-05 09:29:54
  categories:  #设置分类
  - 项目
  - 博客
  ---
  ```

##### 关于页面

1. 执行以下命令创建关于页面，会在 `source` 目录生成 `about/index.md` 文件：

  ```bash
  hexo new page about  #创建关于页面
  ```
2. 打开 `source/about/index.md` 文件，设置 `Front-matter` ，开启关于页面：

  ```markdown
  ---
  title: 标签
  type: "about"
  layout: "about"
  ---
  ```

3. 在主题配置文件中设置 `menu` 项，设置关于页导航 ：

  ```yml
  menu:
    about: /about || 关于
  ```

4. 在 `source/about/index.md` 中编写相关内容，如同写文章一样。

### 进阶配置

##### 瀑布流相册

1. 执行以下命令创建相册页面，会在 `source` 目录生成 `galleries/index.md` 文件：

  ```bash
  hexo new page galleries  #创建相册页面
  ```
2. 打开 `source/galleries/index.md` 文件，设置 `Front-matter` ，开启相册页面：

  ```markdown
  ---
  title: 相册
  layout: "galleries"
  ---
  ```

3. 在主题配置文件中设置 `menu` 项，设置相册页导航 ：

  ```yml
  menu:
    galleries: /galleries || 相册

4. 在主题配置文件开启相册功能：

```yml
galleries:
  enable: true  #开启相册
  title: 相册  #相册标题
  subtitle: Galleries  #相册副标题
  columns: 3 #瀑布流列数，默认为 3
```

5. 在 `/data` 目录下新建 `galleries.json` 文件，创建分目录相册及图片内容：

```json
[{
  "name": "colorful",  //相册名称
  "cover": "/images/theme/post-image.jpg",  //相册封面
  "description": "君未看花时，花与君同寂；君来看花日，花色一时明。",  //相册介绍
  "photos": [  //图片内容
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg"
  ]
}, {
  "name": "记事",
  "cover": "/images/theme/post-image.jpg",
  "description": "翻开随身携带的记事本，写着许多事都是关于你。",
  "photos": [
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg",
    "/images/theme/post-image.jpg"
  ]
}]
```

6. 在 `source/galleries/` 目录下 `新建文件夹` ，命名需要和 `json` 中的 `name` 字段对应，例如：colorful、记事。 在文件夹下新建 `index.md` 文件，内容如下：

```markdown
---
title: 记事  #名称也需要对应
layout: "gallery"
---
```

步骤可能有点难以理解，最后放几张截图，比较直观：

![gallery-1](/images/theme/post-image.jpg)

![gallery-2](/images/theme/post-image.jpg)

![gallery-3](/images/theme/post-image.jpg)

![gallery-4](/images/theme/post-image.jpg)

博客主题项目中我也更新了一些栗子，可以参考一下。

##### 文章置顶

1. 找到 `node_modules\hexo-generator-index\lib\generator.js` 文件，替换成如下代码：

  ```javascript
  'use strict';
  var pagination = require('hexo-pagination');
  module.exports = function (locals) {
    var config = this.config;
    var posts = locals.posts;
    posts.data = posts.data.sort(function (a, b) {
      if (a.top && b.top) {
        if (a.top == b.top) return b.date - a.date;
        else return b.top - a.top;
      } else if (a.top && !b.top) {
        return -1;
      } else if (!a.top && b.top) {
        return 1;
      } else return b.date - a.date;
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

2. 在文章的 `Front-matter` 中添加 `top` 字段，指定数值，数值越大，显示越靠前：

  ```markdown
  ---
  title: zhaoo - 主题使用文档
  date: 2020-05-05 09:29:54
  tags: [Hexo, 主题]
  keywords: hexo-theme-zhaoo, zhaoo, hexo, 主题, 使用文档, document
  categories:
  - 项目
  image: /images/theme/post-image.jpg
  top: 10  #添加该字段
  ---
  ```

##### 打赏二维码

可以在文章底部开启打赏二维码，现支持 `支付宝收款二维码` 和 `微信收款二维码` 两种。在支付宝或微信下载收款二维码，保存到图床或本地，在主题配置文件中设置 `图片URL` 即可：

```yml
donate:
  alipay: https://pic.izhaoo.com/alipay.jpg  #支付宝收款二维码
  wechat: https://pic.izhaoo.com/wechat.jpg  #微信收款二维码
```

##### 社交链接

在页面底部可以设置社交链接，以 `Icon` 图标的形式展示，点击即可链接第三方平台。在主题配置文件中可设置社交链接，内容分为三部分以 `||` 划分，第一部分是社交链接，第二部分是图标样式（IconFont），第三部分是hover颜色。

```yml
social:
  qq: tencent://message/?Menu=yes&uin=894519210 || iconQQ || '#12B7F5'
  wechat: javascript:; || iconwechat-fill || '#09BB07'
  instagram: https://www.instagram.com/izhaoo/ || iconinstagram || '#DA2E76'
  github: https://github.com/izhaoo || icongithub-fill || '#24292E'
  email: mailto:izhaoo@163.com || iconmail
```

### 第三方支持

##### CDN

对于外部静态文件（CSS 或 JS），可以使用第三方 `CDN` 库进行加速。在主题配置文件中填写相应的 `URL` 即可配置，你可以使用默认值（BootCDN），留空则使用本地 `lib` 目录下的文件。

```yml
vendors:
  jquery_js: https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
  fancybox_js: https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js
  pjax_js: https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.min.js
  lazyload_js: https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js
  justifiedGallery_js: https://cdn.bootcdn.net/ajax/libs/justifiedGallery/3.7.0/js/jquery.justifiedGallery.min.js
  fancybox_css: https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.css
  highlight_css: https://cdn.bootcss.com/highlight.js/9.18.1/styles/xcode.min.css
  justifiedGallery_css: https://cdn.bootcdn.net/ajax/libs/justifiedGallery/3.7.0/css/justifiedGallery.min.css
  iconfont_css: //at.alicdn.com/t/font_1445822_58xq2j9v1id.css
```

##### 代码高亮（highlight.js）

1. 在**网站**配置文件中开启代码高亮效果：

  ```yml
  highlight:
    enable: true  #启用代码高亮效果
    line_number: true
    auto_detect: true
    hljs: true
    tab_replace:
  ```

2. 在**主题**配置文件中开启代码高亮第三方库（highlight.js）：

  ```yml
  highlight: true  #开启highlight
  ```

3. 可以自定义代码高亮的样式，修改 `CDN` 配置中 `highlight_css` 的值即可：

  ```yml
  vendors:
    highlight_css: https://cdn.bootcss.com/highlight.js/9.18.1/styles/xcode.min.css
  ```

  可以在 [highlight.js](https://highlightjs.org/) 官方网站预览样式，挑选自己喜欢的样式模式，再到 `BootCDN` 复制对应的 `CSS` 链接即可。
  
  也可以直接下载 `CSS` 文件 ，放到 `/source/lib/highlight` 中，这样的的话 `CDN` 配置需要留空。

##### 无刷新加载（Pjax）

在主题配置文件中可以开启 `pjax` 无刷新加载：

```yml
pjax: true  #开启pjax
```

注：该功能暂时不稳定，会引起一些特效、功能的异常，暂时不建议开启。

##### 图片懒加载（LazyLoad）

在主题配置文件中可以开启图片懒加载功能：

```yml
lazyload: true  #开启图片懒加载
```

默认是开启 `placeholder` （加载占位图）的，可以在网上下载喜欢的动图，替换 `/source/image/loading.gif` 。

##### 图片灯箱（FancyBox）

在主题配置文件中可以开启图片灯箱效果：

```yml
fancybox: true  #开启图片灯箱
```

##### 评论系统（Gitalk）

##### 文章统计（LeanCloud）

##### 脚本埋点

有时候我们需要埋入一些第三方脚本，例如 `百度统计`、`百度SEO` 等。主题在 **头部** 和 **尾部** 分别开放了埋点入口，只需在主题配置文件中填入第三方脚本即可：

```yml
custom:
  #头部埋点
  head:
  #尾部埋点
  foot: <script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?4c204d8bc027a0455b5fc642ac334ca8";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>
  css:
  js:
```