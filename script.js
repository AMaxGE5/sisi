// Panel de notas (⚙️)
document.addEventListener('DOMContentLoaded', () => {
  const gear = document.getElementById('gear');
  const sheet = document.getElementById('sheet');
  const closeBtn = document.getElementById('close-sheet');

  if (gear && sheet) {
    gear.addEventListener('click', () => sheet.classList.add('open'));
  }
  if (closeBtn && sheet) {
    closeBtn.addEventListener('click', () => sheet.classList.remove('open'));
  }

  // Menú lateral desplegable
  const sideMenu = document.querySelector('.side-menu');
  const toggleBtn = document.querySelector('.menu-toggle');

  if (toggleBtn && sideMenu) {
    toggleBtn.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
    });
  }
});
