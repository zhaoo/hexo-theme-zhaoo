hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    var data = hexo.locals.get('data')
    data && data.config && (hexo.theme.config = data.config)
  }
})