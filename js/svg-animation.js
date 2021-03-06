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
  scale: 1.2,
  rotate: 5409,
  skew: '20deg',
  translateY: -20,
  delay: (el, i) => i * 500,
  duration: 100000,
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


anime({
  targets: '.san-pedro-animation path',
  // delay: anime.stagger(400, {start: 500}), // delay starts at 500ms then increase by 100ms for each elements.
  delay: anime.stagger(200, {direction: 'reverse'}),
  keyframes: [
    {translateY: -20},
    {translateX: 10},
    {translateY: 20},
    {translateX: 20},
    // {translateY: -40}
    {translateY: 0}
  ],
  rotate: anime.stagger([-360, 360]), // rotation will be distributed from -360deg to 360deg evenly between all elements
  easing: 'easeInOutQuad',
  loop: true,
  duration: 4000,

});








