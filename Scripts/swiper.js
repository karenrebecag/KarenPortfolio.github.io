const swiper = new Swiper('.swiper', {
    // Opciones de configuración básicas
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Ajustes responsivos
    breakpoints: {
        // Cuando la ventana de visualización es menor a 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20 // Ajusta el espacio entre slides si es necesario
        }
    }
});
