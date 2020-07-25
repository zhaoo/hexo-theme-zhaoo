'use strict';

module.exports.title = function (hexo) {
  hexo.extend.helper.register('page_title', function () {
    var title = this.config.title;
    if (this.is_archive()) {
      title = this.__("nav.archive") + ' - ' + this.config.title;;
      if (this.is_month()) {
        title += ": " + this.page.year + "/" + this.page.month;
      } else if (this.is_year()) {
        title += ": " + this.page.year;
      }
    } else if (this.is_category()) {
      title = this.page.category + ' - ' + this.config.title;
    } else if (this.is_tag()) {
      title = this.page.tag + ' - ' + this.config.title;
    } else if (this.is_post()) {
      title = this.page.title + ' - ' + this.config.title;
    } else if (this.is_page()) {
      title = this.page.title + ' - ' + this.config.title;
    }
    return title;
  });
}