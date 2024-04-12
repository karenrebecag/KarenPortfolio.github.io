document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
  
    // Función para aplicar el tema
    const applyTheme = (darkMode) => {
      const themeStyle = document.getElementById('theme-style');
      const mainpageStyle = document.getElementById('mainpage-style');
      const projectStyle = document.getElementById('project-style'); // Añadido para el proyecto
  
      if (darkMode) {
        // Cambiar a modo oscuro
        themeStyle.setAttribute('href', '/Styles/dark.css');
        mainpageStyle.setAttribute('href', '/Styles/mainpage-dark.css');
        projectStyle.setAttribute('href', '/Styles/project-dark.css'); // Cambiar al CSS oscuro del proyecto
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = '#000'; // Suponiendo que el fondo oscuro sea #000
      } else {
        // Cambiar a modo predeterminado
        themeStyle.setAttribute('href', '/Styles/style.css');
        mainpageStyle.setAttribute('href', '/Styles/mainpage.css');
        projectStyle.setAttribute('href', '/Styles/project.css'); // Volver al CSS claro del proyecto
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
      localStorage.setItem('theme', this.checked ? 'dark' : 'light'); // Almacenar preferencia
      applyTheme(this.checked);
    });
  });
  