!function (window, document) {
  var rootElement = document.documentElement;
  var toggleElement = document.getElementById('color-toggle');
  var localStorageKey = 'color-mode';
  var htmlAttribute = 'color-mode'
  var toggleAttribute = 'color-toggle'

  var getModeFromCSSMediaQuery = function () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var getModeFromLocalStorage = function () {
    return localStorage.getItem(localStorageKey);
  }

  var setColorMode = function (mode) {
    rootElement.setAttribute(htmlAttribute, mode);
    localStorage.setItem(localStorageKey, mode);
  }

  var setIcon = function (mode) {
    var addIconName = mode === 'light' ? 'iconmoono' : 'iconsuno';
    var removeIconName = mode === 'light' ? 'iconsuno' : 'iconmoono';
    toggleElement.classList.remove(removeIconName);
    toggleElement.classList.add(addIconName);
    toggleElement.setAttribute(toggleAttribute, mode);
  }

  var loadColorMode = function (mode) {
    var mode = mode || getModeFromLocalStorage() || getModeFromCSSMediaQuery();
    setColorMode(mode);
    setIcon(mode);
  }

  var switchColorMode = function () {
    toggleElement.addEventListener('click', function () {
      var mode = this.getAttribute(toggleAttribute) === 'light' ? 'dark' : 'light';
      setColorMode(mode);
      setIcon(mode);
    });
  }

  loadColorMode();
  switchColorMode();
}(window, document);