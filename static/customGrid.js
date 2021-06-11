const grid = function () {
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

const ele = function () {
  var elements = document.getElementsByClassName("txt-rotate")
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate")
    var period = elements[i].getAttribute("data-period")
    console.log(period)
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period)
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
}
;(function ($) {
  grid()
  ele()
  /** change value here to adjust parallax level */
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
})(jQuery)
