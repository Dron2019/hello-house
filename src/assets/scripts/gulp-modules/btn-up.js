// const buttonUp = document.querySelector('.js-btn-up');
// if (buttonUp) {
//   buttonUp.addEventListener('click', () => {
//     window.locoScroll.scrollTo(0);
//   });
// }
$(function() {
  // при нажатии на кнопку scrollup
  $('.js-btn-up').click(function() {
    // переместиться в верхнюю часть страницы
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });
});
