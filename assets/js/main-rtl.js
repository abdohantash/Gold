$(document).on("click", ".grid-btn", function () {
  $(".list-btn").removeClass("active");
  $(this).addClass("active");
  $(".grid-product").removeClass("list-product");
});

$(document).on("click", ".list-btn", function () {
  $(".grid-btn").removeClass("active");
  $(this).addClass("active");
  $(".grid-product").addClass("list-product");
});

$(window)
  .resize(function () {
    var width = $(window).width();
    if (width <= 992) {
      $(".grid-product").removeClass("list-product");
      $(".list-btn").removeClass("active");
      $(".grid-btn").addClass("active");
    }
  })
  .resize();

$(document).on("click", ".continue-shipping", function () {
  $(".shipping-address").hide();
  $(".shipping-box-delivary").show();
  $("html, body").animate({ scrollTop: 180 }, 500);
});

$(document).on("click", ".continue-payment", function () {
  $(".shipping-box-delivary").hide();
  $(".payment-box-div").show();
  $("html, body").animate({ scrollTop: 180 }, 500);
});

$(document).on("click", ".shipping-box-delivary .back-step", function () {
  $(".shipping-box-delivary").hide();
  $(".shipping-address").show();
  $("html, body").animate({ scrollTop: 180 }, 500);
});

$(document).on("click", ".payment-box-div .back-step", function () {
  $(".payment-box-div").hide();
  $(".shipping-box-delivary").show();
  $("html, body").animate({ scrollTop: 180 }, 500);
});

(function ($) {
  "use strict";

  function owlCarouselConfig() {
    var target = $(".owl-carousel");
    if (target.length > 0) {
      target.each(function () {
        var el = $(this),
          dataAuto = el.data("owl-auto"),
          dataLoop = el.data("owl-loop"),
          dataSpeed = el.data("owl-speed"),
          dataGap = el.data("owl-gap"),
          dataNav = el.data("owl-nav"),
          dataSlideBy = el.data("owl-slide"),
          dataDots = el.data("owl-dots"),
          dataAnimateIn = el.data("owl-animate-in")
            ? el.data("owl-animate-in")
            : "",
          dataAnimateOut = el.data("owl-animate-out")
            ? el.data("owl-animate-out")
            : "",
          dataDefaultItem = el.data("owl-item"),
          dataItemXXS = el.data("owl-item-xxs"),
          dataItemXS = el.data("owl-item-xs"),
          dataItemSM = el.data("owl-item-sm"),
          dataItemMD = el.data("owl-item-md"),
          dataItemLG = el.data("owl-item-lg"),
          dataItemXL = el.data("owl-item-xl"),
          dataNavLeft = el.data("owl-nav-left")
            ? el.data("owl-nav-left")
            : "<i class='icon-chevron-right'></i>",
          dataNavRight = el.data("owl-nav-right")
            ? el.data("owl-nav-right")
            : "<i class='icon-chevron-left'></i>",
          duration = el.data("owl-duration"),
          datamouseDrag = el.data("owl-mousedrag") == "on" ? true : false,
          center = el.data("owl-center");
        if (
          target.children("div, span, a, img, h1, h2, h3, h4, h5, h5").length >=
          2
        ) {
          el.owlCarousel({
            rtl: true,
            animateIn: dataAnimateIn,
            animateOut: dataAnimateOut,
            margin: dataGap,
            autoplay: dataAuto,
            autoplayTimeout: dataSpeed,
            autoplayHoverPause: true,
            loop: dataLoop,
            slideBy: dataSlideBy,
            nav: dataNav,
            mouseDrag: datamouseDrag,
            touchDrag: true,
            autoplaySpeed: duration,
            navSpeed: duration,
            dotsSpeed: duration,
            dragEndSpeed: duration,
            navText: [dataNavLeft, dataNavRight],
            dots: dataDots,
            items: dataDefaultItem,
            center: Boolean(center),
            responsive: {
              0: {
                items: dataItemXXS,
              },
              390: {
                items: dataItemXS,
              },
              480: {
                items: dataItemSM,
              },
              768: {
                items: dataItemMD,
              },
              992: {
                items: dataItemLG,
              },
              1200: {
                items: dataItemXL,
              },
              1680: {
                items: dataDefaultItem,
              },
            },
          });

          // el.on('change.owl.carousel', function (event) {
          //     var $currentItem = $('.owl-item', el).eq(event.item.index);
          //     var $elemsToanim = $currentItem.find("[data-animation-out]");
          //     setAnimation($elemsToanim, 'out');
          // });

          // el.on('changed.owl.carousel', function (event) {
          //     var $currentItem = $('.owl-item', el).eq(event.item.index);
          //     var $elemsToanim = $currentItem.find("[data-animation-in]");
          //     setAnimation($elemsToanim, 'in');
          // });
        }
      });
    }
  }

  function common() {
    $(".ps-single-no-search").select2({
      minimumResultsForSearch: -1,
      dropdownCssClass: "ps-dropdown-single",
    });

    $(".ps-noti__close").on("click", function (event) {
      event.preventDefault();
      $(".ps-noti").hide();
    });

    $(".ps-header__search .ps-input").on("change paste keyup", function () {
      if ($(this).val()) {
        $(".ps-header__search .search-bar__inner").addClass("active");
      } else {
        $(".ps-header__search .search-bar__inner").removeClass("active");
      }
    });

    $(".ps-header__search .search-bar__inner").on("mouseleave", function (e) {
      $(this).removeClass("active");
    });

    $(".open-search").on("click", function (event) {
      event.preventDefault();
      $(".ps-search").addClass("active");
    });

    $("#close-search").on("click", function (event) {
      event.preventDefault();
      $(".ps-search").removeClass("active");
    });

    $(".ps-search--mobile .ps-input").on("change paste keyup", function () {
      if ($(this).val()) {
        $(".ps-search--mobile .search-bar__inner").addClass("active");
      } else {
        $(".ps-search--mobile .search-bar__inner").removeClass("active");
      }
    });

    $("[data-toggle=tooltip]").tooltip();

    $(".ps-section__toggle").on("click", function (event) {
      event.preventDefault();
      $(".ps-section--review-product .ps-form--review").slideToggle();
    });

    $(".ps-select--feature a").on("click", function (event) {
      event.preventDefault();
      var parent = $(this).parent();
      parent.find("a").removeClass("active");
      $(this).addClass("active");
    });

    $(".ps-block-control").on("click", function (event) {
      event.preventDefault();
      var parent = $(this).parent();
      parent.find(".ps-widget__content").slideToggle();
      $(this).toggleClass("active");
    });

    $("#collapse-filter").on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      $(".ps-categogy__main").toggleClass("active");
    });

    $("#close-widget-product").on("click", function (event) {
      event.preventDefault();
      $(this).removeClass("active");
      $(".ps-categogy__main").removeClass("active");
    });

    $(".select2").select2({
      dropdownCssClass: "ps-dropdown-input",
    });

    $(".ps-shopping__toggle").on("click", function (event) {
      event.preventDefault();
      $(".ps-shopping__form").slideToggle();
    });

    $(".toogle-password").on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("fa-eye");
      $(this).toggleClass("fa-eye-slash");
      var parent = $(this).parent();
      var type =
        parent.find("input").attr("type") == "password" ? "text" : "password";
      parent.find("input").attr("type", type);
    });

    $("#create-account").on("click", function (event) {
      $('.ps-hidden[data-for="create-account"]').slideToggle();
    });

    $("#ship-address").on("click", function (event) {
      $('.ps-hidden[data-for="ship-address"]').slideToggle();
    });
  }

  function openModal() {
    $("#cart-mini, .ps-cart--mini").hover(
      function (e) {
        $(".ps-cart--mini").stop(true, true).addClass("active");
      },
      function () {
        $(".ps-cart--mini").stop(true, true).removeClass("active");
      }
    );

    $("#login-modal, .ps-login--modal").hover(
      function (e) {
        $(".ps-login--modal").stop(true, true).addClass("active");
      },
      function () {
        $(".ps-login--modal").stop(true, true).removeClass("active");
      }
    );

    $("#language-modal, .ps-language--modal").hover(
      function (e) {
        $(".ps-language--modal").stop(true, true).addClass("active");
      },
      function () {
        $(".ps-language--modal").stop(true, true).removeClass("active");
      }
    );
  }

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function stickyMenu() {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var innerWidth = $(window).innerWidth();
      if (scroll > 100 && innerWidth > 760) {
        $(".ps-header").addClass("ps-header--sticky");
      } else if (scroll > 700 && innerWidth < 760) {
        $(".ps-header").addClass("ps-header--sticky");
        $(".search-bar__inner").removeClass("active");
      } else {
        $(".ps-header").removeClass("ps-header--sticky");
      }

      if (scroll > 100) {
        $(".scroll-top").show();
      } else {
        $(".scroll-top").hide();
        $(".ps-navigation").show();
      }
    });

    $(".scroll-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, 500);
    });

    $(".ps-menu--sticky").on("click", function (event) {
      event.preventDefault();
      $(".ps-navigation").slideToggle();
    });
  }

  function subMenuToggle() {
    $(".ps-widget--product .menu--mobile li .parent-name").on(
      "click",
      function (e) {
        e.preventDefault();
        var current = $(this).parent("li");
        current.children(".sub-menu").slideToggle(350);
        // current.siblings().find('.sub-menu').slideUp(350);
        // current.siblings().removeClass('active');
        current.toggleClass("active");
      }
    );

    $(".ps-menu--slidebar .menu--mobile li .sub-toggle").on(
      "click",
      function (e) {
        e.preventDefault();
        var current = $(this).parent("li");
        current.children(".sub-menu").slideToggle(350);
        current.siblings().find(".sub-menu").slideUp(350);
        current.siblings().removeClass("active");
        current.toggleClass("active");
      }
    );

    $(".ps-language-currency .lang-a").on("click", function (e) {
      e.preventDefault();
      var current = $(this).parent("li");
      current.children(".sub-menu").slideToggle(350);
      current.toggleClass("active");
    });

    $("#open-menu").on("click", function (e) {
      e.preventDefault();
      $(".ps-menu--slidebar").addClass("active");
      $(this).parent().addClass("active");
    });

    $("#close-menu").on("click", function (e) {
      e.preventDefault();
      $(".ps-menu--slidebar").removeClass("active");
      $(this).parent().removeClass("active");
    });

    // $('.ps-menu__sticky #menu-slide').on('click', function (e) {
    //     e.preventDefault();
    //     $('.ps-menu--slidebar').addClass('active');
    //     $('#open-menu').parent().addClass('active');
    // });

    $(".menu-slide").on("click", function (e) {
      e.preventDefault();
      $(".ps-menu--slidebar").addClass("active");
      $("#open-menu").parent().addClass("active");
    });

    $("#open-menu-top").on("click", function (e) {
      e.preventDefault();
      $(".ps-menu--slidebar").addClass("active");
      $(this).parent().addClass("active");
      $(".ps-header--mobile").addClass("slidebar-active");
    });

    $("#close-menu-top").on("click", function (e) {
      e.preventDefault();
      $(".ps-menu--slidebar").removeClass("active");
      $(this).parent().removeClass("active");
      $(".ps-header--mobile").removeClass("slidebar-active");
    });
  }

  function slidePriceWidget() {
    var rangeSlider = document.getElementById("slide-price");
    if (rangeSlider) {
      var input0 = document.getElementById("slide-price-min");
      var input1 = document.getElementById("slide-price-max");
      var inputs = [input0, input1];
      noUiSlider.create(rangeSlider, {
        start: [0, 820],
        connect: true,
        step: 1,
        range: {
          min: [1],
          max: [1000],
        },
      });

      rangeSlider.noUiSlider.on("update", function (values, handle) {
        inputs[handle].textContent = "$" + values[handle];
      });
    }
  }

  function backgroundImage() {
    var databackground = $("[data-background]");
    databackground.each(function () {
      if ($(this).attr("data-background")) {
        var image_path = $(this).attr("data-background");
        $(this).css({
          backgroundImage: "url(" + image_path + ")",
        });
      }
    });
  }

  $(function () {
    common();
    openModal();
    stickyMenu();
    owlCarouselConfig();
    subMenuToggle();
    slidePriceWidget();
    backgroundImage();
  });

  $(window).on("load", function () {
    $("#preloader").fadeOut();
    $("body").removeClass('noscroll');
  });
})(jQuery);

$(".countdown").attr("data-date");

// thumbs-img
const galleryThumbs = new Swiper(".thumbs .swiper", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".thumbs .swiper-button-next",
    prevEl: ".thumbs .swiper-button-prev",
  },
});

// thumbs-img
const galleryMain = new Swiper(".view-div .swiper", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

// zoom img
var options1 = {
  offset: {
    vertical: 0,
    horizontal: 10,
  },
};

var options2 = {
  fillContainer: true,
  offset: {
    vertical: 0,
    horizontal: 10,
  },
  zoomPosition: "left",
};

new ImageZoom(document.getElementById("img-1"), options2);
new ImageZoom(document.getElementById("img-2"), options2);
new ImageZoom(document.getElementById("img-3"), options2);

$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".profile-img img").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".profile-img input").on("change", function () {
    readURL(this);
  });
});


lightGallery(document.getElementById('gallery-imgs'), {
  thumbnail: true,
  plugins: [lgZoom, lgThumbnail]
});