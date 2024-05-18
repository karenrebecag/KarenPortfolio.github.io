document.addEventListener('DOMContentLoaded', () => {
    const toggleButton1 = document.getElementById('toggle-button1');
    const collapsibleContent1 = document.getElementById('collapsible-content1');
    const images1 = document.querySelectorAll('.gris-mockups1');

    toggleButton1.addEventListener('click', () => {
      if (collapsibleContent1.classList.contains('collapse1')) {
        collapsibleContent1.classList.remove('collapse1');
        collapsibleContent1.classList.add('expand1');
        toggleButton1.textContent = 'Ver menos';
        images1.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('show-element1');
            img.classList.remove('hide-element1');
          }, index * 50); // Delay incremental más rápido para el efecto de barrido
        });
      } else {
        images1.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('hide-element1');
            img.classList.remove('show-element1');
          }, index * 50); // Delay incremental más rápido para el efecto de barrido
        });
        setTimeout(() => {
          collapsibleContent1.classList.remove('expand1');
          collapsibleContent1.classList.add('collapse1');
          toggleButton1.textContent = 'Ver más';
        }, images1.length * 50 + 300); // Esperar a que todas las imágenes terminen de ocultarse
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton_zoek = document.getElementById('toggle-button_zoek');
    const collapsibleContent_zoek = document.getElementById('collapsible-content_zoek');
    const images_zoek = document.querySelectorAll('.gris-mockups_zoek');

    toggleButton_zoek.addEventListener('click', () => {
      if (collapsibleContent_zoek.classList.contains('collapse_zoek')) {
        collapsibleContent_zoek.classList.remove('collapse_zoek');
        collapsibleContent_zoek.classList.add('expand_zoek');
        toggleButton_zoek.textContent = 'Ver menos';
        images_zoek.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('show-element_zoek');
            img.classList.remove('hide-element_zoek');
          }, index * 50);
        });
      } else {
        images_zoek.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('hide-element_zoek');
            img.classList.remove('show-element_zoek');
          }, index * 50);
        });
        setTimeout(() => {
          collapsibleContent_zoek.classList.remove('expand_zoek');
          collapsibleContent_zoek.classList.add('collapse_zoek');
          images_zoek.forEach(img => {
            img.classList.add('hide-element_zoek');
            img.classList.remove('show-element_zoek');
          });
          toggleButton_zoek.textContent = 'Ver más';
        }, images_zoek.length * 50 + 300);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton2 = document.getElementById('toggle-button2');
    const collapsibleContent2 = document.getElementById('collapsible-content2');
    const images2 = document.querySelectorAll('.gris-mockups2');
  
    function expandSection() {
      collapsibleContent2.classList.remove('collapse2');
      collapsibleContent2.classList.add('expand2');
      toggleButton2.textContent = 'Ver menos';
      toggleButton2.classList.add('rotate');
      images2.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('show-element2');
          img.classList.remove('hide-element2');
        }, index * 50);
      });
    }
  
    function collapseSection() {
      images2.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('hide-element2');
          img.classList.remove('show-element2');
        }, index * 50);
      });
      setTimeout(() => {
        collapsibleContent2.classList.remove('expand2');
        collapsibleContent2.classList.add('collapse2');
        images2.forEach(img => {
          img.classList.add('hide-element2');
          img.classList.remove('show-element2');
        });
        toggleButton2.textContent = 'Ver más';
        toggleButton2.classList.remove('rotate');
      }, images2.length * 10 + 200); // Ajustar tiempo para asegurar que las imágenes se desvanezcan completamente
    }
  
    toggleButton2.addEventListener('click', () => {
      if (collapsibleContent2.classList.contains('collapse2')) {
        expandSection();
      } else {
        collapseSection();
      }
    });
  });
  