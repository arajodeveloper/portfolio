const doSomething = () => {
  // var container = document.getElementById('container');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 1000 - windowHeight;
  var flower = document.getElementById('over');
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    flower.style.left = scrollPercent*window.innerWidth + 'px';
    flower.style.transform = "rotate("+window.pageYOffset+"deg)";
  });
}
