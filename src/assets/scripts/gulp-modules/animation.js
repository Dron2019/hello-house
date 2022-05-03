const paralaxImages = document.querySelectorAll('[data-paralax]');
paralaxImages.forEach((image) => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  wrap.style.height = '100%';
  image.parentElement.prepend(wrap);
  gsap.set(image, { willChange: 'transform', scale: 1.1 });
  wrap.prepend(image);

  gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        start: -100 % top,
        end: 100 % top,
        trigger: wrap,
        scrub: 0.5,
        onLeave: () => {
          // console.log('leave');
        },
        // markers: true,
      },
    })
    .fromTo(
      image,
      {
        y: -35,
        scale: 1,
      },
      {
        y: 35,
        scale: 1.1,
        ease: 'linear',
      },
    );
});
