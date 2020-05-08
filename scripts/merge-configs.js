hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    var data = hexo.locals.get('data')
    data && data._config && (hexo.theme.config = data._config)
  }
  require("./lazyload").lazyload(hexo);
})