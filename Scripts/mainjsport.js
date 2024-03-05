//Fade In Effect for Elements
window.addEventListener('scroll', function() {
  var fadeInElements = document.querySelectorAll('.fade-in');

  for (var i = 0; i < fadeInElements.length; i++) {
    var element = fadeInElements[i];
    var positionFromTop = element.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.style.opacity = '1';
    }
  }
});