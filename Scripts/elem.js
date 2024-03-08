document.addEventListener('DOMContentLoaded', function() {
    // Asegúrate de que el DOM esté completamente cargado antes de asignar los manejadores de eventos
  
    const elems = document.querySelectorAll('.elem'); // Selecciona todos los elementos con la clase .elem
    const imageDisplay = document.querySelector('#imageDisplay img'); // Selecciona el img dentro del contenedor #imageDisplay
  
    if (!imageDisplay) {
      console.error('No se encontró el contenedor de la imagen.');
      return;
    }
  
    elems.forEach(elem => {
      elem.addEventListener('mouseover', function() {
        // Al hacer hover, cambia la fuente de la imagen al data-image del elemento
        const imageSource = this.getAttribute('data-image');
        imageDisplay.src = imageSource;
        imageDisplay.style.opacity = 1; // Hace visible la imagen
      });
  
      elem.addEventListener('mouseout', function() {
        // Al dejar de hacer hover, oculta la imagen
        imageDisplay.style.opacity = 0;
        setTimeout(() => imageDisplay.src = '', 500); // Espera a que la transición termine para eliminar la fuente de la imagen
      });
    });
  });
  