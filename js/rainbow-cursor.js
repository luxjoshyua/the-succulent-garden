function sparkle(e) {
  var o =
    void 0 !== window.pageYOffset
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop
  ;(mainCursor.style.opacity = '1'), counter == allCursors.length && (counter = 0)
  var n = e.pageX + 'px',
    r = e.pageY - o + 'px',
    t = allCursors[counter]
  counter++
  var s = document.createElement('img')
  ;(s.src = t),
    (s.className = 'cursorSparkle'),
    (s.style.left = n),
    (s.style.top = r),
    (mainCursor.style.left = n),
    (mainCursor.style.top = r),
    cursorContainer.appendChild(s),
    setTimeout(function() {
      s.parentNode.removeChild(s)
    }, 600)
}

var counter = 0,
  body = document.body,
  cursorContainer = document.getElementById('cursorContainer'),
  mainCursor = document.getElementById('mainCursor'),
  allCursors = ['assets/cursors/1.png', 'assets/cursors/2.png', 'assets/cursors/3.png', 'assets/cursors/4.png', 'assets/cursors/5.png', 'assets/cursors/6.png']

document.addEventListener('mousemove', function(e) {
  sparkle(e)
})
