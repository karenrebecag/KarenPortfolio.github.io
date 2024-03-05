//This is for the header hide effect functionality
let lastScrollTop = 0;
const header = document.getElementById('miHeader');
let initialScroll;

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Si el scroll actual es mayor al último scroll, es decir, se está scrolleando hacia abajo
    header.classList.add('hidden'); // Ocultar el header
    initialScroll = currentScroll; // Guardar el punto inicial del scroll hacia abajo
  } else {
    // Si el scroll actual es menor al último scroll, es decir, se está scrolleando hacia arriba
    header.classList.remove('hidden'); // Mostrar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Verifica si la URL actual es indexmain.html
  if (window.location.href.indexOf('indexmain.html') > -1) {
    // Selecciona el enlace con el ID y cambia los estilos
    var generalNavLink = document.getElementById('generalNavLink');
    if (generalNavLink) {
      generalNavLink.style.backgroundColor = '#C777E3';
      generalNavLink.style.borderRadius = '1em 1em 0 0';
      generalNavLink.style.color= 'white';
     
    }
  }
  });