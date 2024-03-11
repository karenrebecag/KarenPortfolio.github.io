document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.elem');

  elems.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
      // Creamos la imagen solo una vez al entrar al elemento
      var imgSrc = this.getAttribute('data-image');
      var imgPreview = document.createElement('img');
      imgPreview.setAttribute('src', imgSrc);
      imgPreview.classList.add('image-preview');
      imgPreview.style.position = 'absolute';
      imgPreview.style.zIndex = '1000';
      imgPreview.style.width = '130px'; // Aumentamos el tamaño un 30%
      imgPreview.style.height = 'auto';
      imgPreview.style.pointerEvents = 'none';
      imgPreview.style.borderRadius = '10px'; // Bordes redondeados
      this.appendChild(imgPreview);
    });

    elem.addEventListener('mousemove', function(e) {
      var imgPreview = this.querySelector('.image-preview');
      if (imgPreview) {
        // Calculamos la posición relativa del cursor dentro del elemento
        var rect = this.getBoundingClientRect();
        var posX = e.clientX - rect.left;
        var posY = e.clientY - rect.top;
        imgPreview.style.left = `${posX - imgPreview.offsetWidth / 2}px`; // Centramos la imagen respecto al cursor
        imgPreview.style.top = `${posY - imgPreview.offsetHeight / 2}px`;
      }
    });

    elem.addEventListener('mouseleave', function() {
      var imgPreview = this.querySelector('.image-preview');
      if (imgPreview) {
        this.removeChild(imgPreview);
      }
    });
  });
});
