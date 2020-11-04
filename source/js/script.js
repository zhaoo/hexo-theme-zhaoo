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
    },
    freezeFab: function () {
      $(".fab-up").removeClass("fab-up-active");
      $(".fab-plus").removeClass("fab-plus-active");
      $(".fab-daovoice").removeClass("fab-daovoice-active");
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
      if (CONFIG.preview.motto.api) {
        $.get(CONFIG.preview.motto.api, function (data) {
          if (data) {
            $("#motto").text(data);
          }
        });
      }
    },
    background: function () {
      if (CONFIG.preview.background.api) {
        $(".preview-image").css("background-image", "url(" + CONFIG.preview.background.api + ")");
      }
    }
  }

  var action = {
    smoothScroll: function () {
      // a[href *=#], area[href *=#]
      $(".smooth-scroll").click(function () {
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
        fn.freezeFab();
      });
      $(".fab-up .fab-daovoice").on("click", function () {
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
        if (CONFIG.fancybox) {
          action.fancybox();
        }
      });
    },
    donate: function () {
      $(".donate .icon").on("mouseover", function () {
        $(".donate .qrcode").show();
      });
      $(".donate .icon").children("a").on("mouseover", function () {
        $(".donate .qrcode img").attr('src', eval('CONFIG.donate.' + $(this).attr('id')))
      });
      $(".donate .icon").on("mouseout", function () {
        $(".donate .qrcode").hide();
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
        if (ZHAOO.utils.isDesktop()) {
          fn.navbar.desktop();
        }
        if (ZHAOO.utils.isMobile() && !CONFIG.isHome) {
          fn.navbar.mobile();
        }
      }, 1000)).resize();
      $(".j-navbar-menu").on("click", function () {
        fn.showMenu();
        $(".navbar").addClass("hide");
      });
    },
    preview: function () {
      fn.background();
      fn.motto();
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
    if (CONFIG.fancybox) {
      action.fancybox();
    }
    if (CONFIG.pjax) {
      action.pjax();
    }
    if (CONFIG.lazyload.enable) {
      action.lazyload();
    }
    if (CONFIG.donate.enable) {
      action.donate();
    }
    if (CONFIG.lazyload && CONFIG.fancybox) {
      action.fixLazyloadFancybox();
    }
    if (CONFIG.carrier.enable) {
      action.carrier();
    }
  });

})(jQuery);