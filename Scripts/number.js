document.addEventListener("DOMContentLoaded", function() {
    // Función para animar el número
    function animateNumber(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  
    // Observador para detectar cuando los números entran en el viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetNumber = parseInt(entry.target.getAttribute('data-target-number'), 10);
          animateNumber(entry.target, targetNumber - 15, targetNumber, 2000);
          observer.unobserve(entry.target); // Asegurarse de animar solo una vez por elemento
        }
      });
    }, {
      threshold: 0.5 // Ajustar según sea necesario
    });
  
    // Iniciar la observación de todos los elementos con la clase 'number-animation'
    const numberElements = document.querySelectorAll('.number-animation');
    numberElements.forEach(el => observer.observe(el));
  });
  document.addEventListener("DOMContentLoaded", function() {
    const typeWriterElements = document.querySelectorAll('.typewriter-portfolio');
  
    typeWriterElements.forEach((element) => {
      const fullText = element.textContent;
      let currentCharIndex = 0;
      element.textContent = ''; // Limpiar el texto inicial
  
      const typeWriterEffect = () => {
        if (currentCharIndex < fullText.length) {
          element.textContent += fullText.charAt(currentCharIndex);
          currentCharIndex++;
          setTimeout(typeWriterEffect, 20); // Ajusta la velocidad de escritura aquí
        }
      };
  
      typeWriterEffect();
    });
  });
  