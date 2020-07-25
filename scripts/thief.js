'use strict';

module.exports.thief = function (hexo) {
  hexo.extend.helper.register('thief', function () {
    var config = hexo.theme.config;
    if (!config.thief || !config.thief.enable || !config.thief.type) {
      return;
    }
    var data = '没有抓到内容哦~';
    if (config.thief.type === 'html') {
      data = this.page.content;
    }
    return data;
  });
}