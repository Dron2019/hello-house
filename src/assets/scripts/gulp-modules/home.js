const btn1 = document.querySelectorAll('.js-hover');

btn1.forEach(el => el.addEventListener('mouseenter', () => {
  el.previousElementSibling.style.opacity = '1';
}));
btn1.forEach(el => el.addEventListener('mouseleave', () => {
  el.previousElementSibling.style.opacity = '0';
}));

// video hover start
const videoHover = document.querySelector('.js-video');
const video = document.getElementById('video');
videoHover.addEventListener('mouseenter', () => {
  document.querySelector('.texture').style.opacity = '0';
  video.play();
});
videoHover.addEventListener('mouseleave', () => {
  document.querySelector('.texture').style.opacity = '1';
  video.pause();
});
// video hover end
// video-play start
const popupVideo = document.querySelector('.video-popup');
const closeVideo = document.querySelector('.js-close-video');
videoHover.addEventListener('click', () => {
  popupVideo.classList.add('video-active');
});
closeVideo.addEventListener('click', () => {
  popupVideo.classList.remove('video-active');
});
// video-play end
const scrollDown = document.querySelector('.js-scroll-home');
if (scrollDown) {
  scrollDown.addEventListener('click', () => {
    document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
  });
}

const swiper = new Swiper('.benefits-swiper', {
  slidesPerView: 1.3,
  // centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.benefits-next',
    prevEl: '.benefits-prev',
  },
  breakpoints: {
    // 575: {
    //   spaceBetween: 20,
    // },
    992: {
      spaceBetween: 30,
      slidesPerView: 2.3,
    },
    1440: {
      spaceBetween: 40,
      slidesPerView: 2.3,
    },
  },
});

const swiper2 = new Swiper('.swiper-gallery-bottom', {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // 575: {
    //   spaceBetween: 20,
    // },
    // 992: {
    //   spaceBetween: 50,
    // },
    1440: {
      spaceBetween: 10,
    },
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

const swiper4 = new Swiper('.building-swiper', {
  // centeredSlides: true,
  // spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.pagination-building',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.button-building-next',
    prevEl: '.button-building-prev',
  },
});

const swiper5 = new Swiper('.swiper-text', {
  loop: true,
  // spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper6 = new Swiper('.swiper-img', {
  loop: true,
  // spaceBetween: 10,
  navigation: {
    nextEl: '.button-choose-next',
    prevEl: '.button-choose-prev',
  },
  pagination: {
    el: '.pagination-choose',
    type: 'fraction',
  },
  thumbs: {
    swiper: swiper5,
  },
});

const eye = document.querySelector('.container-eye');
const eyeOpen = document.querySelector('.letter-hover');

eye.addEventListener('mouseenter', () => {
  eyeOpen.style.opacity = '1';
});
eye.addEventListener('mouseleave', () => {
  eyeOpen.style.opacity = '0';
});

// const path = document.querySelector('.some path');
// const defaultMorhp = document.querySelector('.some path').getAttribute('d');
// window.addEventListener('click', () => {
//   gsap.fromTo(
//     '.some path',
//     {
//       scale: 1,
//     },
//     {
//       scale: 4.5,
//     },
//   );
// });

const path = document.querySelector('.js-choose-hover');
const defaultMorhp = document.querySelector('.some path').getAttribute('d');
path.addEventListener('mouseenter', () => {
  gsap.fromTo(
    '.some path',
    {
      scale: 1,
    },
    {
      scale: 4.5,
    },
  );
});
path.addEventListener('mouseleave', () => {
  gsap.fromTo(
    '.some path',
    {
      scale: 4.5,
    },
    {
      scale: 1,
    },
  );
});
