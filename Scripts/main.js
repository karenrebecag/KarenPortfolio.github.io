const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
  
  //Below Contact Section, carousel for the reviews section"

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Cambiar imagen cada 2 segundos
  };




