
  
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



// When the user scrolls the page, execute myFunction
document.addEventListener('DOMContentLoaded', function () {
  // Variables para guardar el elemento activo originalmente y el actualmente bajo hover
  var originalActive = null;
  var hoverActive = null;

  // Define un mapeo de rutas a clases
  var linkMap = {
    '/Pages/indexmain.html': 'nav-home',
    '/Pages/indexme.html': 'nav-about',
    '/Pages/indexp.html': 'nav-portfolio',
    '/Pages/indexcontact.html': 'nav-contact',
  };

  var pathname = window.location.pathname;
  var activeClass = linkMap[pathname];

  // Si existe una clase correspondiente, añade 'active' a ese enlace y lo guarda
  if (activeClass) {
    originalActive = document.querySelector('.' + activeClass);
    if (originalActive) {
      originalActive.classList.add('active');
    }
  }

  // Función para mostrar span en hover
  function showSpan(element) {
    if (hoverActive !== element) {
      hideSpan(hoverActive);
      hoverActive = element;
      element.classList.add('active');
    }
  }

  // Función para ocultar span
  function hideSpan(element) {
    if (element) {
      element.classList.remove('active');
    }
  }

  // Selecciona todos los .nav-item y les añade event listeners para hover
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (navItem) {
    navItem.addEventListener('mouseenter', function () {
      showSpan(navItem);
    });

    navItem.addEventListener('mouseleave', function () {
      hideSpan(navItem);
      // Restablece el active original si existe y no hay otro elemento bajo hover
      if (originalActive && !hoverActive) {
        originalActive.classList.add('active');
      }
    });
  });

  // Cuando se deja de hacer hover sobre cualquier nav-item, se restablece el estado original
  document.querySelector('.button-container-header').addEventListener('mouseleave', function () {
    if (originalActive) {
      showSpan(originalActive);
    }
    hoverActive = null;
  });
});
