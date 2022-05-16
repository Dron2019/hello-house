const list = [
  {
    preview: './assets/images/commercial1.jpg',
    original: './assets/images/commercial-popup/parking.jpg',
    description: 'Parking',
    h: 'Паркінг',
  },
  {
    preview: './assets/images/commercial2.jpg',
    original: './assets/images/commercial-popup/basements.jpg',
    description: 'Basements',
    h: 'Підвальні приміщення',
  },
];

const galleryEl = document.querySelector('.js-commercial');
const cardsMarkup = galleryImg(list);

galleryEl.insertAdjacentHTML('afterbegin', cardsMarkup);

function galleryImg(list) {
  return list
    .map(
      ({ preview, original, description, h }) => `<li class="commercial-item">
          <a href="#">
            <img
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
            <h4>${h}</h4>
          </a>
        </li>`,
    )
    .join('');
}
galleryEl.addEventListener('click', onOpenModal);

const lightBox = document.querySelector('.js-lightbox');
const bigPhoto = document.querySelector('.lightbox__image');
const header = document.querySelector('.header');
function onOpenModal(event) {
  event.preventDefault();
  // if (event.target.nodeName !== 'IMG') {
  //   return;
  // }
  lightBox.classList.add('is-open');
  header.style.display = 'none';
  const linkBigPhoto = event.target.dataset.source;
  bigPhoto.src = linkBigPhoto;
  bigPhoto.alt = event.target.alt;
}

const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const backdrop = document.querySelector('.lightbox__overlay');
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);

function onCloseModal() {
  lightBox.classList.remove('is-open');
  header.style.display = '';
  bigPhoto.removeAttribute('src');
  bigPhoto.removeAttribute('alt');
  document.addEventListener('keydown', onEscKeyPress);
}
function onOpenModal(event) {
  event.preventDefault();
  // if (event.target.nodeName !== 'IMG') {
  //   return;
  // }
  const targetWithImage = event.target.closest('li').querySelector('img');
  lightBox.classList.add('is-open');
  header.style.display = 'none';
  const linkBigPhoto = targetWithImage.dataset.source;
  bigPhoto.src = linkBigPhoto;
  bigPhoto.alt = event.target.alt;
}
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
