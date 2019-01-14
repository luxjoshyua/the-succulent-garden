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


// function randomValues() {
//   anime({
//     targets: '#sydney',
//     translateY: function() {
//       return anime.random(0, 200);
//     },
//     easing: 'easeInOutQuad',
//     duration: 750,
//     complete: randomValues
//   });
// }

// randomValues();


anime({
  targets: '#sydney',
  
});




// use one of the pulse grow things like in racquettes 

// the anime.js targets the svg from the class or id in the html itself, 
// not that added separately to the svg file


anime({
  targets: '.zig-zag-underline',
  translateX: [-20, 20], // from 100 to 250
  delay: 500,
  direction: 'alternate',
  loop: true,
  duration: 3000,
  easing: 'easeInOutQuad'
});

anime({
  targets: '.zig-zag-underline-two',
  translateX: [-20, 20], // from 100 to 250
  delay: 500,
  direction: 'alternate',
  loop: true,
  duration: 3000,
  easing: 'easeInOutQuad'
});







// TweenMax.to(".arrojadoa", 2, {
//   x:600,
//   ease:Bounce.easeOut,
//   y: 100
// }); 

TweenLite.fromTo('#Layer_1_test path ', 4, {drawSVG: "0%"}, {drawSVG: "100%"});



