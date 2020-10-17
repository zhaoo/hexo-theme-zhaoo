'use strict';

module.exports.postImage = function (hexo) {

  function getImages() {
    var config = hexo.theme.config;
    var data = hexo.locals.get('data');
    var images = [];

    if (config.post_image.random === 'galleries' && data.galleries) {
      var galleries = data.galleries;
      for (var item of galleries) {
        item.photos.forEach(function (item) {
          images.push(item);
        });
      }
    }

    if (config.post_image.random === 'local' && data.local_images) {
      var images = data.local_images;
    }

    return images;
  }

  hexo.extend.helper.register('post_image', function (input) {
    var type = typeof input;
    var images = getImages();
    var count = images.length;
    var res = hexo.theme.config.post_image.default;

    if (type === 'string') {
      res = input;
    } else if (type === 'number') {
      res = images[(input - 1) % count];
    } else {
      res = images[Math.floor(Math.random() * count)];
    }
    
    if (!res) {
      res = hexo.theme.config.post_image.default;
    }

    return res;
  });
}