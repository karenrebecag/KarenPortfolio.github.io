
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const headerLogo = document.getElementById('main-logo'); // Logo del encabezado
    const footerLogo = document.getElementById('main-logo-footer'); // Logo del pie de página
  
    // URLs de las imágenes para el modo oscuro y claro
    const darkLogoUrl = 'https://static.wixstatic.com/media/bc0394_efe1b60cb88b4f3d9b7f2c97ab803fc7~mv2.png'; // Modo oscuro
    const lightLogoUrl = 'https://static.wixstatic.com/media/bc0394_b88b6004d88349ef8f879aef69854826~mv2.png'; // Modo claro
  
    let animationExecuted = false; // Controla si la animación se ha ejecutado
  
    // Función para cambiar el tema y actualizar los logos
    function changeTheme(darkMode) {
        if (!animationExecuted) {
            body.style.transition = 'opacity 0.5s ease-out';
            body.style.opacity = '0';
            animationExecuted = true; // Marca que la animación se ha ejecutado
        }
  
        setTimeout(() => {
            if (darkMode) {
                // Actualiza las rutas según la nueva estructura de directorios
                document.getElementById('theme-stylesheet').setAttribute('href', '/Styles/dark.css');
                document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage-dark.css');
                localStorage.setItem('theme', 'dark');
                headerLogo.src = darkLogoUrl; // Cambia la imagen del logo del encabezado al modo oscuro
                footerLogo.src = darkLogoUrl; // Cambia la imagen del logo del pie de página al modo oscuro
            } else {
                // Actualiza las rutas según la nueva estructura de directorios
                document.getElementById('theme-stylesheet').setAttribute('href', '/Styles/styles.css');
                document.getElementById('mainpage-stylesheet').setAttribute('href', '/Styles/mainpage.css');
                localStorage.setItem('theme', 'light');
                headerLogo.src = lightLogoUrl; // Cambia la imagen del logo del encabezado al modo claro
                footerLogo.src = lightLogoUrl; // Cambia la imagen del logo del pie de página al modo claro
            }
  
            if (animationExecuted) {
                setTimeout(() => {
                    body.style.opacity = '1';
                }, 100);
            }
        }, animationExecuted ? 500 : 0);
    }
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeSwitch.checked = true;
        changeTheme(true);
    } else {
        // Asegura que los logos estén correctos si el tema claro está activo
        headerLogo.src = lightLogoUrl;
        footerLogo.src = lightLogoUrl;
    }
  
    themeSwitch.addEventListener('change', function() {
        changeTheme(this.checked);
    });
  });
  