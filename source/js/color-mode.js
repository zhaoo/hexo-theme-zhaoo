!function (window, document) {
  var rootElement = document.documentElement;
  var toggleElement = document.getElementById('color-toggle');
  var storageKey = 'color-mode';
  var mediaQueryStorageKey = 'color-mode-media-query'
  var htmlAttribute = 'color-mode'
  var toggleAttribute = 'color-toggle'

  var getModeFromMediaQuery = function () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var getModeFromLocalStorage = function () {
    return localStorage.getItem(storageKey);
  }

  var getMediaQueryStorage = function () {
    return localStorage.getItem(mediaQueryStorageKey);
  }

  var setMediaQueryStorage = function (mode) {
    localStorage.setItem(mediaQueryKey, mode);
  }

  var setColorMode = function (mode) {
    rootElement.setAttribute(htmlAttribute, mode);
    localStorage.setItem(storageKey, mode);
  }

  var setIcon = function (mode) {
    if (!toggleElement) return;
    var addIconName = mode === 'light' ? 'iconmoono' : 'iconsuno';
    var removeIconName = mode === 'light' ? 'iconsuno' : 'iconmoono';
    toggleElement.classList.remove(removeIconName);
    toggleElement.classList.add(addIconName);
    toggleElement.setAttribute(toggleAttribute, mode);
  }

  var loadColorMode = function (mode) {
    var mode = mode || getModeFromLocalStorage() || getModeFromMediaQuery();
    setColorMode(mode);
    setIcon(mode);
  }

  var switchColorMode = function () {
    if (!toggleElement) return;
    toggleElement.addEventListener('click', function () {
      var mode = this.getAttribute(toggleAttribute) === 'light' ? 'dark' : 'light';
      setColorMode(mode);
      setIcon(mode);
    });
  }

  loadColorMode();
  switchColorMode();
}(window, document);