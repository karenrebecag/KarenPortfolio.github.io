document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
  
    // Asegúrate de que el cuerpo tenga la clase para transición desde el principio
    body.classList.add('body-transition');
  
    // Función para cambiar el tema
    function changeTheme(darkMode) {
      // Inicia la transición reduciendo la opacidad
      body.style.opacity = '0';
  
      setTimeout(() => {
        if (darkMode) {
          // Cambia al tema oscuro
          document.getElementById('theme-style').setAttribute('href', '/Styles/dark.css');
          document.getElementById('mainpage-style').setAttribute('href', '/Styles/mainpage-dark.css');
          localStorage.setItem('theme', 'dark');
        } else {
          // Cambia al tema claro
          document.getElementById('theme-style').setAttribute('href', '/Styles/style.css');
          document.getElementById('mainpage-style').setAttribute('href', '/Styles/mainpage.css');
          localStorage.setItem('theme', 'light');
        }
  
        // Espera un poco antes de restablecer la opacidad para permitir que se cargue el tema
        setTimeout(() => {
          body.style.opacity = '1';
        }, 100); // Este retardo debe ser menor que el de la transición de opacidad para una experiencia más fluida
      }, 500); // Ajusta este valor si es necesario para coordinar con la duración de la transición CSS
    }
  
    // Lee el tema guardado y actualiza el switch y el tema de la página según corresponda
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      themeSwitch.checked = true;
      changeTheme(true);
    } else {
      themeSwitch.checked = false;
      changeTheme(false);
    }
  
    // Evento que escucha el cambio en el switch y actualiza el tema
    themeSwitch.addEventListener('change', function() {
      changeTheme(this.checked);
    });
  });
  