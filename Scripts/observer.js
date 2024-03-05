
  window.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('myVideo');
    video.playbackRate = 2.5;
  });
  // Crear la instancia de IntersectionObserver
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          // Comprobar si el video está en el viewport
          if(entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
          }
      });
  }, { threshold: 0.5 }); // El threshold indica qué porcentaje del video debe estar en pantalla

  // Iniciar la observación del video
  let video = document.getElementById('videoElement');
  observer.observe(video);
