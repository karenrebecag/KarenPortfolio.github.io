document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    
    // Función para aplicar el tema
    const applyTheme = (darkMode) => {
      if (darkMode) {
        document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage-dark.css');
        document.getElementById('styles-stylesheet').setAttribute('href', '/Styles/dark.css');
        document.getElementById('indexhow-stylesheet').setAttribute('href', '/Styles/indexhow-dark.css');
        document.getElementById('dino-stylesheet').setAttribute('href', '/Styles/dino-dark.css');
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = '#000';
      } else {
        document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage.css');
        document.getElementById('styles-stylesheet').setAttribute('href', '/Styles/styles.css');
        document.getElementById('indexhow-stylesheet').setAttribute('href', '/Styles/indexhow.css');
        document.getElementById('dino-stylesheet').setAttribute('href', '/Styles/dino-light.css');
        document.body.style.backgroundColor = '#FFF';
      }
      document.dispatchEvent(new CustomEvent('themeChanged', { detail: { darkMode } }));
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
        localStorage.setItem('theme', 'dark');
        applyTheme(true);
      } else {
        localStorage.setItem('theme', 'light');
        applyTheme(false);
      }
    });
});

