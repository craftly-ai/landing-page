!(function (t) {
  t(".replaceHref").click(function () {
    var o = t(this).attr("href")
    window.location.replace(o)
  }),
    t(".masonry").click(function () {
      var o = t(this).attr("href")
      window.location.replace(o)
    }),
    t("#qlinklist li a").click(function () {
      t(this).parent().addClass("active").siblings().removeClass("active")
    })
  t(".review-slider").slick({
    speed: 1e4,
    autoplay: !0,
    autoplaySpeed: 0,
    centerMode: !0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: !0,
    initialSlide: 1,
    arrows: !1,
    buttons: !1,
    centerPadding: "320px",
    responsive: [
      { breakpoint: 1700, settings: { centerPadding: "200px" } },
      { breakpoint: 1500, settings: { centerPadding: "80px" } },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, centerPadding: "100px" },
      },
      {
        breakpoint: 1121,
        settings: { slidesToShow: 2, centerPadding: "100px" },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
    ],
  }),
    t(".switch input:checkbox").change(function () {
      t(this).is(":checked")
        ? (t(".toggle-button .month").removeClass("active"),
          t(".toggle-button .annual").addClass("active"))
        : (t(".toggle-button .month").addClass("active"),
          t(".toggle-button .annual").removeClass("active"))
    }),
    document.documentElement.clientWidth < 768 &&
      t(".partners-logo-raw ul").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
      })
  var o = function (t, o, e) {
    ;(this.toRotate = o),
      (this.el = t),
      (this.loopNum = 0),
      (this.period = parseInt(e, 10) || 2e3),
      (this.txt = ""),
      this.tick(),
      (this.isDeleting = !1)
  }
  o.prototype.tick = function () {
    var t = this.loopNum % this.toRotate.length,
      o = this.toRotate[t]
    this.isDeleting
      ? (this.txt = o.substring(0, this.txt.length - 1))
      : (this.txt = o.substring(0, this.txt.length + 1)),
      (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>")
    var e = this,
      i = 200 - 100 * Math.random()
    this.isDeleting && (i /= 2),
      this.isDeleting || this.txt !== o
        ? this.isDeleting &&
          "" === this.txt &&
          ((this.isDeleting = !1), this.loopNum++, (i = 500))
        : ((i = this.period), (this.isDeleting = !0)),
      setTimeout(function () {
        e.tick()
      }, i)
  }
  for (
    var e = document.getElementsByClassName("txt-rotate"), i = 0;
    i < e.length;
    i++
  ) {
    var n = e[i].getAttribute("data-rotate"),
      l = e[i].getAttribute("data-period")
    console.log(l), n && new o(e[i], JSON.parse(n), l)
  }
  var s = -0.3,
    a = t(".bg-gradient"),
    c = []
  a.each(function (o, e) {
    c.push(t(e).offset().top)
  }),
    t(window).scroll(function () {
      var o = t(this).scrollTop()
      a.each(function (e, i) {
        var n = c[e]
        t(i).css("background-position", "50% " + (o - n) * s + "px")
      })
    }),
    t(".nav-toggle").click(function () {
      t(this).toggleClass("active"),
        t(".nav-main").toggleClass("open"),
        t("body").toggleClass("nav_open"),
        t("html").toggleClass("scroll-off")
    }),
    t(".collapse.show").each(function () {
      t(this)
        .prev(".card-header")
        .find(".btn-aacordion")
        .addClass("fa-minus")
        .removeClass("fa-plus")
    }),
    t(".collapse")
      .on("show.bs.collapse", function () {
        t(this)
          .prev(".card-header")
          .find(".btn-aacordion")
          .removeClass("fa-plus")
          .addClass("fa-minus")
      })
      .on("hide.bs.collapse", function () {
        t(this)
          .prev(".card-header")
          .find(".btn-aacordion")
          .removeClass("fa-minus")
          .addClass("fa-plus")
      }),
    document.documentElement.clientWidth < 768 &&
      (t(document).ready(function () {
        t(".nav-main ul li").children("ul").toggle(),
          t(".nav-main ul li.sub-menu span").on("click", function () {
            t(this).removeAttr("href")
            var o = t(this).parent("li")
            o.hasClass("open")
              ? (o.removeClass("open"),
                o.find("li").removeClass("open"),
                o.find("ul").slideUp(slow))
              : (o.addClass("open"),
                o.children("ul").slideDown(slow),
                o.siblings("li").children("ul").slideUp(slow),
                o.siblings("li").removeClass("open"),
                o.siblings("li").find("li").removeClass("open"),
                o.siblings("li").find("ul").slideUp(slow))
          }),
          t(".nav-main ul li.sub-menu ul li a, .nav-main ul li a").click(
            function () {
              t(".nav-toggle").removeClass("active"),
                t(".nav-main").removeClass("open"),
                t("body").removeClass("nav_open")
            }
          )
      }),
      t(".pricing-table-raw .row").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
      })),
    (navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/iPad/i)) &&
      (t(".intervent_list ul li").click(function () {}),
      t(".partenaires_con ul li").click(function () {})),
    (s = -0.5),
    (a = t(".stick-gradient")),
    (c = []),
    a.each(function (o, e) {
      c.push(t(e).offset().top)
    }),
    t(window).scroll(function () {
      var o = t(this).scrollTop()
      a.each(function (e, i) {
        var n = c[e]
        t(i).css("background-position", "50% " + (o - n) * s + "px")
      })
    })
  var r = function (t, o, e) {
    ;(this.toRotate = o),
      (this.el = t),
      (this.loopNum = 0),
      (this.period = parseInt(e, 10) || 2e3),
      (this.txt = ""),
      this.tick(),
      (this.isDeleting = !1)
  }
  ;(r.prototype.tick = function () {
    var t = this.loopNum % this.toRotate.length,
      o = this.toRotate[t]
    this.isDeleting
      ? (this.txt = o.substring(0, this.txt.length - 1))
      : (this.txt = o.substring(0, this.txt.length + 1)),
      (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>")
    var e = this,
      i = 50 - 100 * Math.random()
    this.isDeleting && (i /= 2),
      this.isDeleting || this.txt !== o
        ? this.isDeleting &&
          "" === this.txt &&
          ((this.isDeleting = !1), this.loopNum++, (i = 500))
        : ((i = this.period), (this.isDeleting = !1)),
      setTimeout(function () {
        e.tick()
      }, i)
  }),
    t(".production-raw .left-box .input").click(function () {
      t(".production-raw .left-box")
        .addClass("btn-click")
        .delay(1e3)
        .queue(function () {
          t(".production-raw .left-box .btn-row").removeClass("none")
        })
      for (
        var o = document.getElementsByClassName("rotate-text1"), e = 0;
        e < o.length;
        e++
      ) {
        var i = o[e].getAttribute("data-rotate"),
          n = o[e].getAttribute("data-period")
        i && new r(o[e], JSON.parse(i), n)
      }
    }),
    t(".production-raw .left-box .btn-row .gradient-btn").click(function () {
      t(".production-raw .left-box .btn-row").addClass("tooltip-none"),
        t(".favorite-box").addClass("none"),
        t(".favorite-box").removeClass("block"),
        t(".generate-ideas").addClass("block"),
        t(".generate-ideas").removeClass("none")
    }),
    AOS.init({ duration: 700, offset: 200, delay: 150 }),
    t(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !0,
    })
  var u = new TimelineMax(),
    d = t(".cb-video-container"),
    p = d.find(".video"),
    h = d.find(".play-pause--click-area"),
    f = d.find(".play-pause--container"),
    g = d.find(".play-icon"),
    m = d.find(".pause-icon"),
    w = !1,
    v = Back.easeInOut.config(1.7)
  TweenMax.set(m, { autoAlpha: 0, scale: 0 }),
    h.on("click", function () {
      w
        ? ((w = !1),
          u.reverse(),
          console.log("paused - show play"),
          p.get(0).pause())
        : ((w = !0),
          u.play(),
          u.to(g, 0.3, { autoAlpha: 0, scale: 0, ease: v }, 0),
          u.to(m, 0.3, { autoAlpha: 1, scale: 1, ease: v }, 0),
          console.log("playing - show pause"),
          p.get(0).play())
    }),
    h.on("mouseleave", function () {
      !0 === w && TweenMax.to(f, 0.3, { autoAlpha: 0 }, 0),
        console.log("mouseleave")
    }),
    h.on("mouseenter", function () {
      TweenMax.to(f, 0.3, { autoAlpha: 1 }, 0), console.log("mouseenter")
    }),
    p.on("ended", function () {
      console.log("video ended")
    })
})(jQuery),
  document.documentElement.clientWidth > 1499 &&
    (function (t) {
      var o = t(".about-page-wrap"),
        e = []
      o.each(function (o, i) {
        e.push(t(i).offset().top)
      }),
        t(window).scroll(function () {
          var i = t(this).scrollTop()
          o.each(function (o, n) {
            var l = e[o]
            t(n).css("background-position", "50% " + -1 * (i - l) + "px")
          })
        })
    })(jQuery),
  document.documentElement.clientWidth < 1499 &&
    (function (t) {
      var o = t(".about-page-wrap"),
        e = []
      o.each(function (o, i) {
        e.push(t(i).offset().top)
      }),
        t(window).scroll(function () {
          var i = t(this).scrollTop()
          o.each(function (o, n) {
            var l = e[o]
            t(n).css("background-position", "50% " + -0.8 * (i - l) + "px")
          })
        })
    })(jQuery),
  document.documentElement.clientWidth < 1279 &&
    (function (t) {
      var o = t(".about-page-wrap"),
        e = []
      o.each(function (o, i) {
        e.push(t(i).offset().top)
      }),
        t(window).scroll(function () {
          var i = t(this).scrollTop()
          o.each(function (o, n) {
            var l = e[o]
            t(n).css("background-position", "50% " + -0.7 * (i - l) + "px")
          })
        })
    })(jQuery),
  document.documentElement.clientWidth < 991 &&
    (function (t) {
      var o = t(".about-page-wrap"),
        e = []
      o.each(function (o, i) {
        e.push(t(i).offset().top)
      }),
        t(window).scroll(function () {
          var i = t(this).scrollTop()
          o.each(function (o, n) {
            var l = e[o]
            t(n).css("background-position", "50% " + -0.5 * (i - l) + "px")
          })
        })
    })(jQuery),
  document.documentElement.clientWidth < 767 &&
    (function (t) {
      var o = t(".about-page-wrap"),
        e = []
      o.each(function (o, i) {
        e.push(t(i).offset().top)
      }),
        t(window).scroll(function () {
          var i = t(this).scrollTop()
          o.each(function (o, n) {
            var l = e[o]
            t(n).css("background-position", "50% " + -0.3 * (i - l) + "px")
          })
        })
    })(jQuery),
  $(document).ready(function () {
    $(window).load(function () {
      $(".tools-tab-Scrollbar").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: { enable: !0 },
      })
    })
  }),
  document.documentElement.clientWidth < 991 &&
    ($(".tools-col #popular ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(".tools-raw #popular .all-tools-raw").offset().top - 40,
        },
        0
      )
    }),
    $(".tools-col #company ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(".tools-raw #company .all-tools-raw").offset().top - 40,
        },
        0
      )
    }),
    $(".tools-col #blog ul li a").click(function () {
      $("html, body").animate(
        { scrollTop: $(".tools-raw #blog .all-tools-raw").offset().top - 40 },
        0
      )
    }),
    $(".tools-col #web-copy ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(".tools-raw #web-copy .all-tools-raw").offset().top - 40,
        },
        0
      )
    }),
    $(".tools-col #ecommerce ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop:
            $(".tools-raw #ecommerce .all-tools-raw").offset().top - 40,
        },
        0
      )
    }),
    $(".tools-col #ads ul li a").click(function () {
      $("html, body").animate(
        { scrollTop: $(".tools-raw #ads .all-tools-raw").offset().top - 40 },
        0
      )
    }),
    $(".tools-col #email ul li a").click(function () {
      $("html, body").animate(
        { scrollTop: $(".tools-raw #email .all-tools-raw").offset().top - 40 },
        0
      )
    }),
    $(".tools-col #seo ul li a").click(function () {
      $("html, body").animate(
        { scrollTop: $(".tools-raw #seo .all-tools-raw").offset().top - 40 },
        0
      )
    }),
    $(".tools-col #socials ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(".tools-raw #socials .all-tools-raw").offset().top - 40,
        },
        0
      )
    }),
    $(".tools-col #writing-tool ul li a").click(function () {
      $("html, body").animate(
        {
          scrollTop:
            $(".tools-raw #writing-tool .all-tools-raw").offset().top - 40,
        },
        0
      )
    }))
