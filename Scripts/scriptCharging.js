window.addEventListener('load', function() {
    // Ocultar la pantalla de carga
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease';
  
    // Mostrar el contenido principal
    var mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'block';
  
    // Eliminar la pantalla de carga del DOM después de la transición
    setTimeout(function() {
      loadingScreen.parentNode.removeChild(loadingScreen);
    }, 500); // Coincide con la duración de la transición
  });