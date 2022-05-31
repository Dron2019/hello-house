const spanBezier1 = 'power4.ease';
const spanEntries1 = document.querySelectorAll('[data-span-entry1], [data-span-entry2], [data-span-entry3]');
const spanEntries2 = document.querySelectorAll('[data-span-entry2]');
const spanEntries3 = document.querySelectorAll('[data-span-entry3]');
spanEntries1.forEach((section, index) => {
  gsap.set(section, { overflow: 'hidden' });
  section.innerHTML = `
    <div>
      ${section.innerHTML}
    </div>
  `;
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 1,
      trigger: section,
      scroller: document.querySelector('.page__inner'),
      onEnter: () => {
        if (index === 0) console.log('enter');
      },
      once: true,
    },
  });
  tl.fromTo(
    section.querySelector('div'),
    {
      y: '50%',
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: spanBezier1,
    },
  );
});
// spanEntries2.forEach((section, index) => {
//   gsap.set(section, { overflow: 'hidden' });
//   section.innerHTML = `
//     <div>
//       ${section.innerHTML}
//     </div>
//   `;
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       triggerHook: 1,
//       trigger: section,
//       scroller: document.body,
//       onEnter: () => {
//         if (index === 0) console.log('enter');
//       },
//       once: true,
//     },
//   });
//   tl.fromTo(
//     section.querySelector('div'),
//     { y: '50%', autoAlpha: 0 },
//     {
//       y: 0,
//       autoAlpha: 1,
//       delay: 0.3,
//       duration: 1,
//       ease: spanBezier1,
//     },
//   );
// });
// spanEntries3.forEach((section, index) => {
//   gsap.set(section, { overflow: 'hidden' });
//   section.innerHTML = `
//     <div>
//       ${section.innerHTML}
//     </div>
//   `;
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       triggerHook: 1,
//       trigger: section,
//       scroller: document.body,
//       onEnter: () => {
//         if (index === 0) console.log('enter');
//       },
//       once: true,
//     },
//   });
//   tl.fromTo(
//     section.querySelector('div'),
//     { y: '50%', autoAlpha: 0 },
//     {
//       y: 0,
//       autoAlpha: 1,
//       delay: 0.5,
//       duration: 1,
//       ease: spanBezier1,
//     },
//   );
// });
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
        start: '-100% top',
        end: '100% top',
        scroller: document.querySelector('.page__inner'),
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
