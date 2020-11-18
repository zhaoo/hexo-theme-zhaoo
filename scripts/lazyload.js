'use strict';

module.exports.lazyload = function (hexo) {
  hexo.on('generateBefore', function () {
    var config = hexo.theme.config;
    if (!config.lazyload || !config.lazyload.enable) {
      return;
    }
    if (config.lazyload.only_post) {
      hexo.extend.filter.register('after_post_render', function (data) {
        data.content = lazyProcess.call(this, data.content);
        return data;
      });
    } else {
      hexo.extend.filter.register('after_render:html', function (str, data) {
        return lazyProcess.call(this, str);
      });
    }
  });
}

function lazyProcess(data) {
  return data.replace(/<img([^>]*)src="([^"]*)"([^>]*)>/gim, function (match, attrBegin, src, attrEnd) {
    if (!src || /class="(.*?)"/gi.test(match)) {
      return match;
    }
    var className = `lazyload`;
    var placeholder = `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==`;
    return `<img ${attrBegin} class="${className}" data-original="${src}" src="${placeholder}" ${attrEnd}>`;
  });
}