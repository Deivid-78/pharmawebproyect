// Mostrar u ocultar submenús
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
      const submenu = item.querySelector('ul');
      if (submenu) submenu.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
      const submenu = item.querySelector('ul');
      if (submenu) submenu.style.display = 'none';
    });
  });
  
  // Validación de formulario de muestra (básica)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(input => {
        if (!input.value.trim()) {
          alert(`Por favor completa el campo: ${input.previousElementSibling.textContent}`);
          valid = false;
          input.focus();
          e.preventDefault();
          return false;
        }
      });
      return valid;
    });
  });
  