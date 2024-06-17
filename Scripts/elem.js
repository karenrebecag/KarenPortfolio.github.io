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
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.elem');

  elems.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
      // La imagen ya se crea al entrar al elemento, no la añadimos nuevamente.
    });

    elem.addEventListener('mousemove', function(e) {
      var imgPreview = this.querySelector('.image-preview');
      if (imgPreview) {
        var rect = this.getBoundingClientRect();
        var posX = e.clientX - rect.left;
        var posY = e.clientY - rect.top;
        imgPreview.style.left = `${posX - imgPreview.offsetWidth / 2}px`;
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

  const toggleButton_spaceInvaders = document.getElementById('toggle-button_spaceInvaders');
  const collapsibleContent_spaceInvaders = document.getElementById('collapsible-content_spaceInvaders');
  const images_spaceInvaders = document.querySelectorAll('.gris-mockups_spaceInvaders');

  function alignTextLeft(button) {
    button.style.textAlign = 'left';
  }

  alignTextLeft(toggleButton_spaceInvaders);

  toggleButton_spaceInvaders.addEventListener('click', () => {
    if (collapsibleContent_spaceInvaders.classList.contains('collapse_spaceInvaders')) {
      collapsibleContent_spaceInvaders.classList.remove('collapse_spaceInvaders');
      collapsibleContent_spaceInvaders.classList.add('expand_spaceInvaders');
      toggleButton_spaceInvaders.textContent = 'Close';
      alignTextLeft(toggleButton_spaceInvaders);
      images_spaceInvaders.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('show-element_spaceInvaders');
          img.classList.remove('hide-element_spaceInvaders');
        }, index * 50);
      });
    } else {
      images_spaceInvaders.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('hide-element_spaceInvaders');
          img.classList.remove('show-element_spaceInvaders');
        }, index * 50);
      });
      setTimeout(() => {
        collapsibleContent_spaceInvaders.classList.remove('expand_spaceInvaders');
        collapsibleContent_spaceInvaders.classList.add('collapse_spaceInvaders');
        toggleButton_spaceInvaders.textContent = 'Space Invaders';
        alignTextLeft(toggleButton_spaceInvaders);
      }, images_spaceInvaders.length * 50 + 300);
    }
  });
});
