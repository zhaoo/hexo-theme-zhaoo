(function ($) {
  "use strict";

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