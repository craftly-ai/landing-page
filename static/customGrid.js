;(function ($) {
  //our clients reviews card grid
  $(".review-slider").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    centerPadding: "320px",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1121,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  })

  //grid
  $(".grid").masonry({
    itemSelector: ".grid-item",
  })
  $(".switch input:checkbox").change(function () {
    if ($(this).is(":checked")) {
      $(".toggle-button .month").removeClass("active")
      $(".toggle-button .annual").addClass("active")
    } else {
      $(".toggle-button .month").addClass("active")
      $(".toggle-button .annual").removeClass("active")
    }
  })
  if (document.documentElement.clientWidth < 768) {
    $(".partners-logo-raw ul").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    })
  }

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ""
    this.tick()
    this.isDeleting = false
  }

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  var elements = document.getElementsByClassName("txt-rotate")
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate")
    var period = elements[i].getAttribute("data-period")
    console.log(period)
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period)
    }
  }

  var parallax = -0.3

  var $bg_images = $(".bg-gradient")
  var offset_tops = []
  $bg_images.each(function (i, el) {
    offset_tops.push($(el).offset().top)
  })

  $(window).scroll(function () {
    var dy = $(this).scrollTop()
    $bg_images.each(function (i, el) {
      var ot = offset_tops[i]
      $(el).css("background-position", "50% " + (dy - ot) * parallax + "px")
    })
  })

  //main data

  $(".nav-toggle").click(function () {
    $(this).toggleClass("active")
    $(".nav-main").toggleClass("open")
    $("body").toggleClass("nav_open")
    $("html").toggleClass("scroll-off")
  })

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".btn-aacordion")
      .addClass("fa-minus")
      .removeClass("fa-plus")
  })

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".btn-aacordion")
        .removeClass("fa-plus")
        .addClass("fa-minus")
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".btn-aacordion")
        .removeClass("fa-minus")
        .addClass("fa-plus")
    })

  if (document.documentElement.clientWidth < 768) {
    $(document).ready(function () {
      $(".nav-main ul li").children("ul").toggle()
      $(".nav-main ul li.sub-menu span").on("click", function () {
        $(this).removeAttr("href")
        var element = $(this).parent("li")
        if (element.hasClass("open")) {
          element.removeClass("open")
          element.find("li").removeClass("open")
          element.find("ul").slideUp(slow)
        } else {
          element.addClass("open")
          element.children("ul").slideDown(slow)
          element.siblings("li").children("ul").slideUp(slow)
          element.siblings("li").removeClass("open")
          element.siblings("li").find("li").removeClass("open")
          element.siblings("li").find("ul").slideUp(slow)
        }
      })

      $(".nav-main ul li.sub-menu ul li a, .nav-main ul li a").click(
        function () {
          $(".nav-toggle").removeClass("active")
          $(".nav-main").removeClass("open")
          $("body").removeClass("nav_open")
        }
      )
    })
    $(".pricing-table-raw .row").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    })
  }

  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i)
  ) {
    $(".intervent_list ul li").click(function () {})
    $(".partenaires_con ul li").click(function () {})
  }

  var parallax = -0.5

  var $bg_images = $(".stick-gradient")
  var offset_tops = []
  $bg_images.each(function (i, el) {
    offset_tops.push($(el).offset().top)
  })

  $(window).scroll(function () {
    var dy = $(this).scrollTop()
    $bg_images.each(function (i, el) {
      var ot = offset_tops[i]
      $(el).css("background-position", "50% " + (dy - ot) * parallax + "px")
    })
  })

  var TxtRotate1 = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ""
    this.tick()
    this.isDeleting = false
  }

  TxtRotate1.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

    var that = this
    var delta = 50 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = false
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  var TxtRotate2 = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ""
    this.tick()
    this.isDeleting = false
  }

  TxtRotate2.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

    var that = this
    var delta = 50 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = false
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  $(".production-raw .left-box .input").click(function () {
    $(".production-raw .left-box")
      .addClass("btn-click")
      .delay(1000)
      .queue(function () {
        $(".production-raw .left-box .btn-row").removeClass("none")
      })
    var elements = document.getElementsByClassName("rotate-text1")
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate")
      var period = elements[i].getAttribute("data-period")
      if (toRotate) {
        new TxtRotate1(elements[i], JSON.parse(toRotate), period)
      }
    }
  })

  $(".production-raw .left-box .btn-row .gradient-btn").click(function () {
    $(".production-raw .left-box .btn-row").addClass("tooltip-none")

    $(".favorite-box").addClass("none")
    $(".favorite-box").removeClass("block")

    $(".generate-ideas").addClass("block")
    $(".generate-ideas").removeClass("none")
  })

  AOS.init({
    duration: 700,
    offset: 200,
    delay: 150,
  })

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  })

  var tl = new TimelineMax(),
    $videoContainer = $(".cb-video-container"),
    $video = $videoContainer.find(".video"),
    $playPauseClickArea = $videoContainer.find(".play-pause--click-area"),
    $playPauseContainer = $videoContainer.find(".play-pause--container"),
    $playIcon = $videoContainer.find(".play-icon"),
    $pauseIcon = $videoContainer.find(".pause-icon"),
    iconIsToggled = false,
    iconEase = Back.easeInOut.config(1.7),
    iconDuration = 0.3

  setupVideo()

  // functions
  function setupVideo() {
    TweenMax.set($pauseIcon, { autoAlpha: 0, scale: 0 })
  }

  function showPaused() {
    iconIsToggled = true

    tl.play()
    tl.to(
      $playIcon,
      iconDuration,
      { autoAlpha: 0, scale: 0, ease: iconEase },
      0
    )
    tl.to(
      $pauseIcon,
      iconDuration,
      { autoAlpha: 1, scale: 1, ease: iconEase },
      0
    )

    console.log("playing - show pause")
    $video.get(0).play()
  }

  function showPlay() {
    iconIsToggled = false

    tl.reverse()

    console.log("paused - show play")
    $video.get(0).pause()
  }

  // event handlers
  $playPauseClickArea.on("click", function () {
    !iconIsToggled ? showPaused() : showPlay()
  })

  $playPauseClickArea.on("mouseleave", function () {
    if (iconIsToggled === true)
      TweenMax.to($playPauseContainer, iconDuration, { autoAlpha: 0 }, 0)
    console.log("mouseleave")
  })

  $playPauseClickArea.on("mouseenter", function () {
    TweenMax.to($playPauseContainer, iconDuration, { autoAlpha: 1 }, 0)
    console.log("mouseenter")
  })

  $video.on("ended", function () {
    // TODO: showReplay()
    console.log("video ended")
  })
})(jQuery)
