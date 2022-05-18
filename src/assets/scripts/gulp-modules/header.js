document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.building-popup').style.display = '';
  document.querySelector('.thanks-page').style.display = '';
  document.querySelector('.js-call-mobile').style.display = '';
  document.querySelector('.feedback-form').style.display = '';
  document.querySelector('.video-popup').style.display = '';
});

function menuOpen(menu) {
  menu.classList.add('menu__active');
  const createAnimation = (links, translateY = 0, delay = 0) => {
    links.forEach((link, i) => {
      // eslint-disable-next-line no-undef
      gsap.from(link, {
        delay: delay + i / 10,
        y: translateY,
        opacity: 0,
      });
    });
  };

  const links1 = menu.querySelectorAll('[data-animation1]');
  const links2 = menu.querySelectorAll('[data-animation2]');
  const links3 = menu.querySelectorAll('[data-animation3]');
  const links4 = menu.querySelectorAll('[data-animation4]');
  createAnimation(links1, 100, 0.3);
  createAnimation(links2, 100, 0.2);
  createAnimation(links3, 100, 0.1);
  createAnimation(links4, 100, 0.2);
}

function menuClose(menu) {
  menu.classList.remove('menu__active');
}

function menuInit() {
  const menu = document.querySelector('[data-menu]');
  document.querySelector('[data-open-menu]').addEventListener('click', () => menuOpen(menu));
  document.querySelector('[data-close-menu]').addEventListener('click', () => menuClose(menu));
}

function init() {
  const unSelectHandler = (container) => {
    const elem = container.querySelector('.select-items');
    if (!elem.classList.contains('select-hide')) {
      container.classList.remove('select-arrow-active');
      elem.classList.add('select-hide');
    }
    window.removeEventListener('click', unSelectHandler);
  };
  // const selectHandler = event => {
  //   event.stopPropagation();
  //   const container = event.target.closest('[data-lang]');
  //   container.classList.add('select-arrow-active');
  //   container.querySelector('.select-items').classList.remove('select-hide');
  //   window.addEventListener('click', unSelectHandler.bind(null, container));
  // };
  // document.querySelector('[data-lang="mobile"]').addEventListener('click', selectHandler);
  // document.querySelector('[data-lang="desktop"]').addEventListener('click', selectHandler);

  menuInit();
}

window.addEventListener('DOMContentLoaded', init);
// Mobile phone menu start
const btnCallMobile = document.querySelectorAll('.js-mobile-call');
const btnMenuMobile = document.querySelectorAll('.js-menu-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.form-header-call');
const formCallMobile = document.querySelector('.js-mobile-form');

formCallMobile.addEventListener('click', () => {
  formMobile.classList.remove('sideform-active');
  formCall.classList.toggle('feedback-active');
  document.querySelector('body').style.overflow = 'hidden';
});
btnCallMobile.forEach(el => el.addEventListener('click', () => {
  formMobile.classList.toggle('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
}));
btnMenuMobile.forEach(el => el.addEventListener('click', () => {
  const menu = document.querySelector('[data-menu]');
  menu.classList.remove('menu__active');
  formMobile.classList.toggle('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
}));
btnCloseMobile.addEventListener('click', () => {
  formMobile.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
  // formGratitude.classList.remove('sideform-active');
  // document.querySelector('body').style.overflow = 'auto';
});
formMobile.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    formMobile.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }
}
// Mobile phone menu end

// button hover start
const btn = document.querySelectorAll('.js-button');
btn.forEach(el => el.addEventListener('mousemove', (e) => {
  const x = e.pageX - el.offsetLeft;
  const y = e.pageY - el.offsetTop;

  el.style.setProperty('--x', `${x}px`);
  el.style.setProperty('--y', `${y}px`);
}));

// button hover end

// button hover social start
const btnSociale = document.querySelectorAll('.js-social-hover');
btnSociale.forEach(el => el.addEventListener('mouseenter', () => {
  el.nextElementSibling.style.opacity = '1';
}));
btnSociale.forEach(el => el.addEventListener('mouseleave', () => {
  el.nextElementSibling.style.opacity = '0';
}));

// button hover social end
// feedback form start
const btnCallMenu = document.querySelectorAll('.js-call');
const btnClose = document.querySelectorAll('.js-close');
const formCall = document.querySelector('.feedback-form');
const formGratitude = document.querySelector('.thanks-page');
// const btnForm = document.querySelectorAll('form-button-js');

btnCallMenu.forEach(el => el.addEventListener('click', () => {
  const menu = document.querySelector('[data-menu]');
  menu.classList.remove('menu__active');
  formCall.classList.toggle('feedback-active');
  document.querySelector('body').style.overflow = 'hidden';
}));

btnClose.forEach(el => el.addEventListener('click', () => {
  formCall.classList.remove('feedback-active');
  document.querySelector('body').style.overflow = 'auto';
}));
// btnClose.forEach(el =>
//   el.addEventListener('click', () => {
//     formGratitude.classList.remove('sideform-active');
//     document.querySelector('body').style.overflow = 'auto';
//   }),
// );
// btnForm.forEach(el =>
//   el.addEventListener('click', () => {
//     formGratitude.classList.remove('sideform-active');
//     document.querySelector('body').style.overflow = 'auto';
//   }),
// );
