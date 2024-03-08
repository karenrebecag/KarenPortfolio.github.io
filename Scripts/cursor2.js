document.addEventListener("DOMContentLoaded", function() {
    const customCursor = document.getElementById('customCursor2');
    const page4 = document.getElementById('Services');
  
    document.addEventListener('mousemove', (e) => {
      // Asegura que el cursor personalizado siga el ratón sólo dentro de #page4
      if (e.target.closest('#Services')) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
        customCursor.style.display = 'flex'; // Muestra el cursor personalizado
      } else {
        customCursor.style.display = 'none'; // Oculta el cursor personalizado fuera de #page4
      }
    });
  
    page4.addEventListener('mouseenter', () => {
      // Reinicia la animación
      customCursor.classList.remove('cursor-grow', 'cursor-shrink');
      void customCursor.offsetWidth; // Forzar el reflow/repaint
      customCursor.classList.add('cursor-grow');
    });
  
    page4.addEventListener('mouseleave', () => {
      // Prepara el cursor para la siguiente animación
      customCursor.classList.add('cursor-shrink');
    });
  });
  