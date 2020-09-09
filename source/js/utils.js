(function ($) {
  "use strict";

  ZHAOO.utils = {
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
          var callNow = !timeout;
          timeout = setTimeout(function () {
            timeout = null;
          }, wait);
          if (callNow) func.apply(context, args);
        } else {
          timeout = setTimeout(function () {
            func.apply(context, args);
          }, wait);
        }
      }
    },
    throttle: function (func, wait, options) {
      var timeout, context, args;
      var previous = 0;
      if (!options) options = {};
      var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
      }
      var throttled = function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
      }
      return throttled;
    },
    hasMobileUA: function () {
      var nav = window.navigator;
      var ua = nav.userAgent;
      var pa = /iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;
      return pa.test(ua);
    },
    isTablet: function () {
      return (
        window.screen.width > 767 &&
        window.screen.width < 992 &&
        this.hasMobileUA()
      );
    },
    isMobile: function () {
      return window.screen.width < 767 && this.hasMobileUA();
    },
    isDesktop: function () {
      return !this.isTablet() && !this.isMobile();
    }
  }

})(jQuery);