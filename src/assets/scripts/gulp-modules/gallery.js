// function initSlider() {
//   // eslint-disable-next-line no-undef
//   const swiper = new Swiper('.js-gallery__slider', {
//     loop: true,
//     navigation: {
//       nextEl: document.querySelector('[data-next]'),
//       prevEl: document.querySelector('[data-prev]'),
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },
//     preloadImages: false,
//     lazy: true,
//     speed: 400,
//     watchSlidesVisibility: true,
//   });
//   console.log(swiper);
// }

// document.addEventListener('DOMContentLoaded', initSlider);

const swiper2 = new Swiper('.swiper-gallery-bottom', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    575: {
      slidesPerView: 6,
    },
    // 992: {
    //   //   spaceBetween: 50,
    //   slidesPerView: 2,
    // },
    // 1440: {
    //   spaceBetween: 30,
    // },
  },
});
const swiper3 = new Swiper('.swiper-gallery', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
  thumbs: {
    swiper: swiper2,
  },
  // autoplay: {
  //   delay: 5000,
  // },
});
