document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
  
    // Función para cambiar el tema
    function changeTheme(darkMode) {
      body.style.transition = 'opacity 0.5s ease-out';
      body.style.opacity = '0';
  
      setTimeout(() => {
        if (darkMode) {
          // Cambia al tema oscuro
          document.getElementById('theme-stylesheet').setAttribute('href', '/Styles/dark.css');
          localStorage.setItem('theme', 'dark');
        } else {
          // Cambia al tema claro
          document.getElementById('theme-stylesheet').setAttribute('href', '/Styles/styles.css');
          localStorage.setItem('theme', 'light');
        }
  
        setTimeout(() => {
          body.style.opacity = '1';
        }, 100);
      }, 500);
    }
  
    // Lee el tema guardado y actualiza el switch y el tema de la página según corresponda
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      themeSwitch.checked = true;
      changeTheme(true);
    }
  
    // Evento que escucha el cambio en el switch y actualiza el tema
    themeSwitch.addEventListener('change', function() {
      changeTheme(this.checked);
    });
  });
  