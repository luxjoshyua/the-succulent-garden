// sunshine at the top
anime({
  targets: '#sunshine',
  rotate: '1turn',
  delay: (el, i) => i * 100,
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})


// sydney
anime({
  targets: '#sydney',
  scale: 1.3,
  rotate: 1280,
  skew: '20deg',
  translateY: -20,
  delay: (el, i) => i * 400,
  duration: 100005,
  duration: 8000,
  loop: 'true',
  direction: 'alternate',
  easing: 'easeInOutQuad'
});


// the anime.js targets the svg from the class or id in the html itself, 
// not that added separately to the svg file
// use svg id then path
// use delay: anime.stagger(100) to increase delay by 100ms for each elements


anime({
  targets: '.zig-zag-underline',
  translateX: [-20, 20], // from 100 to 250
  delay: 500,
  direction: 'alternate',
  loop: true,
  duration: 2500,
  easing: 'easeInOutQuad'
});

// anime({
//   targets: '.zig-zag-underline-two',
//   translateX: [-20, 20], // from 100 to 250
//   delay: 500,
//   direction: 'alternate',
//   loop: true,
//   duration: 3000,
//   easing: 'easeInOutQuad'
// });








