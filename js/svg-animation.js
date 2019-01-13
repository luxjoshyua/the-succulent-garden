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

// anime({
//   targets: '#sydney',
//   rotate: '1turn',
//   delay: (el, i) => i * 100,
//   duration: 2000,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutSine'
// })

// var CSStransforms = anime({
//   targets: '#sydney .el-sq',
//   translateX: 50,
//   translateY: 50, 
//   scale: 1.2,
//   rotate: '5turn',
//   loop: true,
//   duration: 4600, 
// });


// use one of the pulse grow things like in racquettes 




// TweenMax.to(".arrojadoa", 2, {
//   x:600,
//   ease:Bounce.easeOut,
//   y: 100
// }); 




TweenLite.fromTo('#Layer_1_test path ', 4, {drawSVG: "0%"}, {drawSVG: "100%"});



