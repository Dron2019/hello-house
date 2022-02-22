const swiper = new Swiper('.awards-swiper', {
  // centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 2,
  loop: true,

  navigation: {
    nextEl: '.awards-btn-next',
    prevEl: '.awards-btn-prev',
  },
});
