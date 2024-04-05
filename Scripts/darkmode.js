document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');

  // Función para aplicar el tema
  const applyTheme = (darkMode) => {
    if (darkMode) {
      // Cambiar a modo oscuro
      document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage-dark.css');
      document.getElementById('styles-stylesheet').setAttribute('href', '/Styles/dark.css');
      document.getElementById('indexhow-stylesheet').setAttribute('href', '/Styles/indexhow-dark.css');
      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = '#000'; // Suponiendo que el fondo oscuro sea #000
    } else {
      // Cambiar a modo predeterminado
      document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage.css');
      document.getElementById('styles-stylesheet').setAttribute('href', '/Styles/styles.css');
      document.getElementById('indexhow-stylesheet').setAttribute('href', '/Styles/indexhow.css');
      document.body.style.backgroundColor = '#FFF'; // Volver al color de fondo predeterminado
    }
  };

  // Verificar y aplicar el tema al cargar la página
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
    applyTheme(true);
  } else {
    themeSwitch.checked = false;
    applyTheme(false);
  }

  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('theme', 'dark'); // Almacenar preferencia
      applyTheme(true);
    } else {
      localStorage.setItem('theme', 'light'); // Almacenar preferencia
      applyTheme(false);
    }
  });
});