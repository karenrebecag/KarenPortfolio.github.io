
 //Gravity Effect
// Función para calcular la distancia entre dos puntos
function getDistance(x1, y1, x2, y2) {
  let xDist = x1 - x2;
  let yDist = y1 - y2;
  return Math.sqrt((xDist * xDist) + (yDist * yDist));
}

// Función para mover una imagen hacia el cursor
function moveTowardsCursor(event, imageElement, strength) {
  const imgRect = imageElement.getBoundingClientRect();
  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;

  const distance = getDistance(imgCenterX, imgCenterY, event.clientX, event.clientY);

  // Cuanto más cerca esté el cursor, más fuerte será el efecto
  if (distance < 600) { // Puedes ajustar este valor para cambiar el rango de la "gravedad"
    const deltaX = (event.clientX - imgCenterX) / strength;
    const deltaY = (event.clientY - imgCenterY) / strength;

    imageElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  } else {
    // Resetea la posición si el cursor está demasiado lejos
    imageElement.style.transform = 'translate(0px, 0px)';
  }
}

document.addEventListener('mousemove', function(event) {
  const images = document.querySelectorAll('.karen-ortiz-footer');

  images.forEach((image) => {
    moveTowardsCursor(event, image, 20); // El segundo argumento es la "fuerza" de la gravedad
  });
});



   window.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('myVideoSlow');
    video.playbackRate = 0.1;
  });


              // Observer
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


              document.addEventListener('mousemove', function(e) {
                var follower = document.getElementById('follower');
                // Puedes ajustar 'left' y 'top' para posicionar la imagen exactamente donde la deseas.
                follower.style.left = e.pageX + 'px';
                follower.style.top = e.pageY + 'px';
            });

