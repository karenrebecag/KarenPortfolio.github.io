document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
  
    // Función para aplicar el tema
    const applyTheme = (darkMode) => {
      const themeStyle = document.getElementById('theme-style');
      const mainpageStyle = document.getElementById('mainpage-style');
      const projectStyle = document.getElementById('project-style');
      const contactStyle = document.getElementById('contact-style'); // Añadido para la sección de contacto
  
      if (darkMode) {
        // Cambiar a modo oscuro
        themeStyle.setAttribute('href', '/Styles/dark.css');
        mainpageStyle.setAttribute('href', '/Styles/mainpage-dark.css');
        projectStyle.setAttribute('href', '/Styles/project-dark.css');
        contactStyle.setAttribute('href', '/Styles/contact-dark.css'); // Cambiar al CSS oscuro de contacto
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = '#000'; // Suponiendo que el fondo oscuro sea #000
      } else {
        // Cambiar a modo predeterminado (claro)
        themeStyle.setAttribute('href', '/Styles/style.css');
        mainpageStyle.setAttribute('href', '/Styles/mainpage.css');
        projectStyle.setAttribute('href', '/Styles/project.css');
        contactStyle.setAttribute('href', '/Styles/contact.css'); // Volver al CSS claro de contacto
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
  