prefinery =
  window.prefinery ||
  function () {
    ;(window.prefinery.q = window.prefinery.q || []).push(arguments)
  }
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
