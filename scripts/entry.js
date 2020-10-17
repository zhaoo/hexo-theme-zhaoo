'use strict';

require("./merge-config").mergeConfig(hexo);
require("./lazyload").lazyload(hexo);
require("./title").title(hexo);
require("./carrier").carrier(hexo);
require("./post-image").randomImage(hexo);
require("./post-image").getImageById(hexo);