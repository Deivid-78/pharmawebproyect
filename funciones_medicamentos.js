document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  // Mostrar/ocultar medicamentos al hacer clic
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  // Funcionalidad del buscador
  const buscador = document.getElementById('buscador');

  buscador.addEventListener('input', () => {
    const filtro = buscador.value.toLowerCase();

    cards.forEach(card => {
      const items = card.querySelectorAll('.details li');
      let coincidencia = false;

      items.forEach(item => {
        const texto = item.textContent;
        const textoLower = texto.toLowerCase();
        const coincide = textoLower.includes(filtro);

        if (coincide) {
          // Resaltar coincidencia
          const regex = new RegExp(`(${filtro})`, 'gi');
          const textoResaltado = texto.replace(regex, '<span class="resaltado">$1</span>');
          item.innerHTML = textoResaltado;
          item.style.display = 'list-item';
          coincidencia = true;
        } else {
          item.style.display = 'none';
        }
      });

      if (coincidencia || filtro === '') {
        card.classList.remove('oculta');
        card.style.display = 'block';
      } else {
        card.classList.add('oculta');
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});
const toggleBtn = document.getElementById('toggle-todos');
let todosActivos = false;

toggleBtn.addEventListener('click', () => {
  todosActivos = !todosActivos;
  cards.forEach(card => {
    if (todosActivos) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const toggleBtn = document.getElementById('toggle-todos');
  let todosActivos = false;

  toggleBtn.addEventListener('click', () => {
    todosActivos = !todosActivos;
    cards.forEach(card => {
      if (todosActivos) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    toggleBtn.textContent = todosActivos ? 'Ocultar todos' : 'Mostrar todos';
  });
});
