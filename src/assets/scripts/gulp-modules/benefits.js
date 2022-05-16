const buttonDown = document.querySelector('.js-scroll-down');
if (buttonDown) {
  buttonDown.addEventListener('click', () => {
    // window.locoScroll.scrollTo(document.querySelector('.section-goals');
    document.querySelector('.js-section2').scrollIntoView({ behavior: 'smooth' });
  });
}
