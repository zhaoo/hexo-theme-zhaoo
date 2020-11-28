console.log("%c Github %c", "background:#333333; color:#ffffff", "", "https://github.com/izhaoo/hexo-theme-zhaoo");

(function ($) {
  "use strict";

  var fn = {
    showMenu: function () {
      $(".menu").fadeIn(300);
      $("body").addClass("lock-screen");
      fn.hideFab();
    },
    hideMenu: function () {
      $(".menu").fadeOut(300);
      $("body").removeClass("lock-screen");
    },
    activeFab: function () {
      $(".fab-up").addClass("fab-up-active");
      $(".fab-plus").addClass("fab-plus-active");
      $(".fab-daovoice").addClass("fab-daovoice-active");
      $(".fab-tencent-chao").addClass("fab-tencent-chao-active");
    },
    freezeFab: function () {
      $(".fab-up").removeClass("fab-up-active");
      $(".fab-plus").removeClass("fab-plus-active");
      $(".fab-daovoice").removeClass("fab-daovoice-active");
      $(".fab-tencent-chao").removeClass("fab-tencent-chao-active");
    },
    showFab: function () {
      $(".fab").removeClass("fab-hide").addClass("fab-show");
    },
    hideFab: function () {
      $(".fab").addClass("fab-hide").removeClass("fab-show");
    },
    scroolFab: function () {
      var height = $(window).height();
      var scrollTop = $(window).scrollTop();
      if (scrollTop > height) {
        fn.showFab();
      } else {
        fn.freezeFab();
        fn.hideFab();
      }
    },
    scroolToTop: function () {
      $('body,html').animate({
        scrollTop: '0px'
      }, 800);
    },
    navbar: {
      mobile: function () {
        $(".navbar").addClass("hide");
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          var before = $(this).scrollTop();
          $(window).on("scroll", function () {
            var after = $(this).scrollTop();
            if (before > after && after > 300) {
              $(".navbar").removeClass("hide");
            } else if (before < after || after < 300) {
              $(".navbar").addClass("hide");
            }
            before = after;
          })
        }, 500));
      },
      desktop: function () {
        function center() {
          if ($(window).scrollTop() > 60) {
            $(".navbar .center").addClass("hide");
          } else {
            $(".navbar .center").removeClass("hide");
          }
        }
        center();
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          center();
          var before = $(this).scrollTop();
          $(window).on("scroll", function () {
            var after = $(this).scrollTop();
            if (before > after) {
              $(".navbar").removeClass("hide");
            } else if (before < after) {
              $(".navbar").addClass("hide");
            }
            before = after;
          })
        }, 500));
      },
    },
    motto: function () {
      if (!CONFIG.preview.motto.api) return;
      var data_contents = CONFIG.preview.motto.data_contents && JSON.parse(CONFIG.preview.motto.data_contents);
      $.get(CONFIG.preview.motto.api, function (result) {
        if (data_contents.length > 0) {
          data_contents.forEach(function (item) {
            result = result[item];
          });
        }
        result && $("#motto").text(result);
      });
    },
    background: function () {
      if (!CONFIG.preview.background.api) return;
      $(".preview-image").css("background-image", "url(" + CONFIG.preview.background.api + ")");
    }
  }

  var action = {
    smoothScroll: function () {
      // a[href *=#], area[href *=#]
      $(".smooth-scroll, .toc-link").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var $target = $(decodeURIComponent(this.hash));
          $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $("html,body").animate({
              scrollTop: targetOffset
            }, 500);
            location.hash = this.hash;
            return false;
          }
        }
      });
    },
    loading: function () {
      $(".loading").delay(500).fadeOut(300);
      $("body").removeClass("lock-screen");
    },
    fab: function () {
      $(".fab-plus").on("click", function () {
        if ($(this).hasClass("fab-plus-active")) {
          fn.freezeFab();
        } else {
          fn.activeFab();
        }
      });
      $(".fab-daovoice").on("click", function () {
        daovoice('openMessages');
      });
      $(".fab-up, .fab-daovoice, fab-tencent-chao").on("click", function () {
        fn.freezeFab();
      });
      if (CONFIG.fab.always_show) {
        fn.showFab();
      } else {
        $(window).scroll(fn.scroolFab);
      }
    },
    menu: function () {
      $(".menu-close").on("click", function () {
        fn.hideMenu();
        $(".navbar").removeClass("hide");
      });
    },
    scroolToTop: function () {
      $(".fab-up").on("click", function () {
        fn.scroolToTop();
      })
    },
    fancybox: function () {
      $(".fancybox").fancybox();
      $(".article .content img").each(function () {
        var e = document.createElement("a");
        $(e).attr("data-fancybox", "images");
        $(e).attr("href", $(this).attr("src"));
        $(this).wrap(e);
      });
    },
    pjax: function () {
      $(function () {
        $(document).pjax("a:not(.menu *)", '#main', {
          fragment: '#main',
          timeout: 6000
        });
      });
      $(document).on('pjax:complete', function () {
        CONFIG.fancybox && action.fancybox();
      });
    },
    donate: function () {
      $(".donate .icon").on("mouseover", function () {
        $("#qrcode-donate").show();
      });
      $(".donate .icon").children("a").on("mouseover", function () {
        $("#qrcode-donate img").attr('src', eval('CONFIG.donate.' + $(this).attr('id')))
      });
      $(".donate .icon").on("mouseout", function () {
        $("#qrcode-donate").hide();
      });
    },
    lazyload: function () {
      $("img.lazyload").lazyload({
        effect: "fadeIn",
        threshold: 200,
      });
    },
    fixLazyloadFancybox: function () {
      $(document).find('.article img[data-original]').each(function () {
        $(this).parent().attr("href", $(this).attr("data-original"));
      });
    },
    carrier: function () {
      $(".j-carrier-btn").on("click", ZHAOO.utils.throttle(function () {
        $(".j-carrier-data").select();
        document.execCommand("Copy");
        ZHAOO.zui.message({ text: '已复制到剪切板', type: 'success' });
      }, 1000));
    },
    navbar: function () {
      $(window).resize(ZHAOO.utils.throttle(function () {
        ZHAOO.utils.isDesktop() && fn.navbar.desktop();
        (ZHAOO.utils.isMobile() && !CONFIG.isHome) && fn.navbar.mobile();
      }, 1000)).resize();
      $(".j-navbar-menu").on("click", function () {
        fn.showMenu();
        $(".navbar").addClass("hide");
        $(".qrcode").fadeOut(300);
      });
      $(".j-navbar-qrcode").on("click", function () {
        if ($("#qrcode-navbar").is(":hidden")) {
          $("#qrcode-navbar").fadeIn(300);
        } else {
          $("#qrcode-navbar").fadeOut(300);
        }
      });
    },
    preview: function () {
      fn.background();
      fn.motto();
    },
    qrcode: function () {
      if (CONFIG.qrcode.type === 'url') {
        $("#qrcode-navbar").qrcode({
          text: window.location.href,
          width: 150,
          height: 150
        });
      } else if (CONFIG.qrcode.type === 'image') {
        $("#qrcode-navbar").append('<img src="' + CONFIG.qrcode.image + '" alt="qrcode" />');
      }
    },
    toc: function () {
      var current = [];
      var titleList = new Map();
      $("article .content h1,h2,h3,h4,h5,h6").each(function () {
        var title = $(this).attr("id");
        var height = $(this).offset().top;
        titleList.set(height, title);
      });
      $(window).on("scroll", f);
      function f() {
        var height = $(this).scrollTop() || $(window).scrollTop();
        for (var item of titleList) {
          if (item[0] >= height) {
            current = item;
            break;
          }
        }
        $(".toc-link").removeClass("active");
        $(".toc-link[href='#" + current[1] + "']").addClass("active");
      };
      f();
    },
    scrollbar: function () {
      var totalH = $(document).height();
      var clientH = $(window).height();
      $(window).on("scroll", f);
      function f() {
        var validH = totalH - clientH;
        var scrollH = $(document).scrollTop();
        var height = scrollH / validH * 100;
        $(".j-scrollbar-current").css("height", height + '%');
      }
      f();
      $(".j-scrollbar").mousedown(function (e) {
        var scrollH = e.offsetY * totalH / 100;
        $("html,body").animate({ scrollTop: scrollH }, 300);
        $(document).mousemove(function (e) {
          var scrollH = (1 - ((clientH - e.clientY) / clientH)) * totalH;
          $("html,body").scrollTop(scrollH);
          $("html,body").css({ "user-select": "none", "cursor": "move" });
        });
        $(document).mouseup(function () {
          $(document).off('mousemove');
          $("html,body").css({ "user-select": "auto", "cursor": "default" });
        });
      });
    },
    notification: function () {
      if (!CONFIG.notification.list) return;
      var page_white_list = CONFIG.notification.page_white_list && JSON.parse(CONFIG.notification.page_white_list);
      var page_black_list = CONFIG.notification.page_black_list && JSON.parse(CONFIG.notification.page_black_list);
      var path = window.location.pathname;
      if ((page_white_list && page_white_list.indexOf(path) < 0) || (page_black_list && page_black_list.indexOf(path) >= 0)) return;
      var delay = CONFIG.notification.delay;
      var list = JSON.parse(CONFIG.notification.list);
      var playList = list.filter(function (item) {
        return item.enable && ZHAOO.utils.isDuringDate(item.startTime, item.endTime) && item;
      });
      playList.forEach(function (item) {
        ZHAOO.zui.notification({ title: item.title, content: item.content, delay: delay });
      });
    }
  }

  $(function () {
    action.smoothScroll();
    action.loading();
    action.fab();
    action.navbar();
    action.menu();
    action.scroolToTop();
    action.preview();
    CONFIG.fancybox && action.fancybox();
    CONFIG.pjax && action.pjax();
    CONFIG.lazyload.enable && action.lazyload();
    CONFIG.donate.enable && action.donate();
    (CONFIG.lazyload && CONFIG.fancybox) && action.fixLazyloadFancybox();
    CONFIG.carrier.enable && action.carrier();
    CONFIG.qrcode.enable && action.qrcode();
    CONFIG.toc.enable && action.toc();
    CONFIG.scrollbar.model === 'simple' && action.scrollbar();
    CONFIG.notification.enable && action.notification();
  });

})(jQuery);
