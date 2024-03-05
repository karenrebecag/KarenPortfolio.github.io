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

