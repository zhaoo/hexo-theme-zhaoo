'use strict';

function lazyload(data) {
  var config = hexo.theme.config;
  if (!config.lazyload) {
    return;
  }

  data = data.replace(
    /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
    function (match, attrBegin, src, attrEnd) {
      if (!src) {
        return match;
      }
      var className = `lazyload`;
      var placeholder = `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==`;
      return `<img ${attrBegin} class="${className}" data-original="${src}" src="${placeholder}" ${attrEnd}>`;
    }
  );

  return data
}

hexo.extend.filter.register('after_render:html', lazyload);