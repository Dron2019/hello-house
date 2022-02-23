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
  const unSelectHandler = container => {
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

// button hover start
const btn = document.querySelectorAll('.js-button');
btn.forEach(el =>
  el.addEventListener('mousemove', e => {
    const x = e.pageX - el.offsetLeft;
    const y = e.pageY - el.offsetTop;

    el.style.setProperty('--x', x + 'px');
    el.style.setProperty('--y', y + 'px');
  }),
);

// button hover end

// button hover social start
const btnSociale = document.querySelectorAll('.js-social-hover');

btnSociale.forEach(el =>
  el.addEventListener('mouseenter', () => {
    el.nextElementSibling.style.opacity = '1';
  }),
);
btnSociale.forEach(el =>
  el.addEventListener('mouseleave', () => {
    el.nextElementSibling.style.opacity = '0';
  }),
);

// button hover social end