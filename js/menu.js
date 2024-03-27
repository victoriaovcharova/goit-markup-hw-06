// Відкриття вікна меню
(() => {
  const refs = {
    openModalBtn: document.querySelector('[backdrop-menu-open]'),
    closeModalBtn: document.querySelector('[backdrop-menu-close]'),
    modal: document.querySelector('[backdrop-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

// Анімація відкриття вікна меню
document.getElementById('toggleMenu').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// Закриття вікна меню при натисканні на пункт навігації
var menuLinks = document.querySelectorAll('.backdrop-menu-list');
var menu = document.querySelector('.menu');
var closeButton = document.querySelector('.modal-menu-close-button');
function closeMenu() {
  menu.classList.remove('is-open');
}
closeButton.addEventListener('click', function () {
  closeMenu();
});
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu();
  });
});