var swiper = new Swiper(".product__slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
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
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    414: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var swiper = new Swiper(".news__slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 2.5,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
