'use strict';

module.exports.carrier = function (hexo) {
  hexo.extend.helper.register('carrier', function () {
    var config = hexo.theme.config;
    if (!config.carrier || !config.carrier.enable || !config.carrier.type) {
      return;
    }
    var data = '没有抓到内容哦~';
    if (config.carrier.type === 'html') {
      data = this.page.content;
    }
    return data;
  });
}