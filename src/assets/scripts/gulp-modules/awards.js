const swiper = new Swiper('.awards-swiper', {
  // centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.awards-btn-next',
    prevEl: '.awards-btn-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    992: {
      //   spaceBetween: 50,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 30,
    },
  },
});
