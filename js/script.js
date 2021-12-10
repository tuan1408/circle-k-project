var swiper = new Swiper(".product__slider", {
  loop: true,
  grabCursor: true,
  // centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".banner", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".sub-slider", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".service__slider", {
  initialSlide: 0,

  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    414: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".news__slider", {
  spaceBetween: 20,

  loop: true,
  grabCursor: true,
  // centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
