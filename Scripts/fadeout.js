const mainBanner = document.querySelector('.main-banner-fadeout');
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Si el scroll actual es mayor al último scroll, es decir, se está scrolleando hacia abajo
    mainBanner.style.opacity = '0.5'; // Bajar la opacidad de la sección
  } else {
    // Si el scroll actual es menor al último scroll, es decir, se está scrolleando hacia arriba
    mainBanner.style.opacity = '1'; // Restaurar la opacidad original de la sección
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
