document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
  
    const applyTheme = (darkMode) => {
      document.getElementById('style-default').setAttribute('href', darkMode ? '/Styles/dark.css' : '/Styles/style.css');
      document.getElementById('portfolio-default').setAttribute('href', darkMode ? '/Styles/portfolio-dark.css' : '/Styles/portfolio.css');
      document.getElementById('mainpage-default').setAttribute('href', darkMode ? '/Styles/mainpage-dark.css' : '/Styles/mainpage.css');
      document.getElementById('contact-default').setAttribute('href', darkMode ? '/Styles/contact-dark.css' : '/Styles/contact.css');

      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = darkMode ? '#000' : '#FFF';
    };
  
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      themeSwitch.checked = true;
      applyTheme(true);
    } else {
      applyTheme(false);
    }
  
    themeSwitch.addEventListener('change', function() {
      localStorage.setItem('theme', this.checked ? 'dark' : 'light');
      applyTheme(this.checked);
    });
  });
  



 