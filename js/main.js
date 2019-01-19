$('.menu-toggle').on('click', function () {
  $('.menu').toggleClass('open')
  return false
})


// ==== marquee effect ====

// here we make a function called makeMarquee
function makeMarquee() {
  const title = 'Come and see our Succulent Garden!-Open every day from 9am!-Fun for the whole family!'
  // an array is a list of things
  // ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista']
  // here we make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(90).fill(title).join(' — ')
  // querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('.marquee span')
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText
}

// here we actually run our makeMarquee function
makeMarquee()


// only use e for jQuery events

// arrojadoa

var i = document.getElementById('ar-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('aj-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('aj-text-b').style.display = 'none';
}

// bunny ears

var i = document.getElementById('be-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('be-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('be-text-b').style.display = 'none';
}


// grusonii

var i = document.getElementById('gr-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('gr-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('gr-text-b').style.display = 'none';
}

// san pedro

var i = document.getElementById('sa-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('sa-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('sa-text-b').style.display = 'none';
}

// peyote 

var i = document.getElementById('pe-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('pe-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('pe-text-b').style.display = 'none';
}

// elephant 

var i = document.getElementById('el-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('el-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('el-text-b').style.display = 'none';
}


// eulychnia 

var i = document.getElementById('eu-text');

i.onmouseover = function () {
  // console.log("rollover"); 
  document.getElementById('eu-text-b').style.display = 'block';
}

i.onmouseout = function () {
  document.getElementById('eu-text-b').style.display = 'none';
}




// circles here
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// here we grab all our the .circles from the html
const circles = document.querySelectorAll('.circle')

// circles returns us an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with its index
circles.forEach((circle, index) => {
  // in here we get access to each one as 'circle'
  circle.animate([{
    transform: 'scale(1)'
  }, {
    transform: 'scale(1.5)'
  }, {
    transform: 'scale(1)'
  }], {
    // here we use the index to create a staggered animation delay
    delay: 400 * index,
    duration: 4500,
    iterations: Infinity
  })
})