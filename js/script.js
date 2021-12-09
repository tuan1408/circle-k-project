var swiper = new Swiper(".product__slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
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
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".news__slider", {
  spaceBetween: 20,

  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
