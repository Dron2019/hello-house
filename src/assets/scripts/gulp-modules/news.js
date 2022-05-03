const list = document.querySelectorAll('.news__item');
const btnNews = document.querySelectorAll('.filter__item');
console.log(btnNews);
btnNews.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  const target = event.target.dataset.view;
  console.log(target);
  console.log(el);
  // el.classList.add('active');

  list.forEach((elem) => {
    elem.classList.remove('hide');
    el.classList.add('active');
    if (!elem.classList.contains(target) && target != 'all') {
      elem.classList.add('hide');
      // el.classList.remove('active');
    }
  });
}));
