'use strict';

require("./merge-config").mergeConfig(hexo);
require("./lazyload").lazyload(hexo);
require("./caption").caption(hexo);
require("./title").title(hexo);
require("./carrier").carrier(hexo);
require("./post-image").postImage(hexo);