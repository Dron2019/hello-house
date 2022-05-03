const eye = document.querySelector('.container-eye');
const eyeOpen = document.querySelector('.letter-hover');

eye.addEventListener('mouseenter', () => {
  eyeOpen.style.opacity = '1';
});
eye.addEventListener('mouseleave', () => {
  eyeOpen.style.opacity = '0';
});
