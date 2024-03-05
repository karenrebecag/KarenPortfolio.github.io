//OWL Function Caroussel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 1600, 
      responsive: {
        600: {
          items: 1 // Muestra dos elementos cuando el ancho es mayor a 600px
        },
        1000: {
          items: 2 // Muestra tres elementos cuando el ancho es mayor a 1000px
        }
      }
    });
  });


  //CV Button
  document.getElementById('downloadCvButton').addEventListener('click', function() {
    window.open('https://bc039413-b629-4485-81f6-45112da50757.usrfiles.com/ugd/bc0394_199aaf04412a41fda293ff8be9502807.pdf', '_blank');
});




