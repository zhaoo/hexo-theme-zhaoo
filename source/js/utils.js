(function ($) {
  "use strict";

  ZHAOO.utils = {
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        timeout && clearTimeout(timeout);
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

  ZHAOO.zui = {
    message: function ({ text, type, timer }) {
      var message = '<div class="zui-message ' + (type || "info") + '"><p>' + text + '</p></div>';
      $("body").append(message);
      var e = $(".zui-message");
      e.ready(function () {
        e.addClass("in");
        setTimeout(function () {
          e.removeClass("in");
          e.on("transitionend webkitTransitionEnd", function () {
            $(this).remove();
          });
        }, timer || 3000);
      });
    }
  }

})(jQuery);

class AsyncLimit {
  constructor(limit) {
    this.limit = Number(limit) || 2;
    this.pool = [];
    this.current = 0;
  }

  async run(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error('Function error.');
    }
    if (this.current >= this.limit) {
      await new Promise(resolve => this.pool.push(resolve));
    }
    return this._handleRun(fn);
  }

  async _handleRun(fn) {
    this.current++;
    try {
      return await fn();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.current--;
      if (this.pool.length) {
        this.pool[0]();
        this.pool.shift();
      }
    }
  }
}