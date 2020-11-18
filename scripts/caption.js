'use strict';

module.exports.caption = function (hexo) {
  hexo.extend.filter.register('after_post_render', function (data) {
    var config = hexo.theme.config;
    if (!config.caption || !config.caption.enable) {
      return;
    }
    data.content = data.content.replace(/<img([^>]*)alt="([^"]*)"([^>]*)>/gim, function (match, attrBegin, alt, attrEnd) {
      if (!alt) {
        return match;
      }
      return `<img ${attrBegin} ${attrEnd}><span class="image-caption">${alt}</span>`;
    });
  }, 0);
}