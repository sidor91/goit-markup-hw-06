(() => {
  const refs = {
    // керування модальним вікном
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    // керування мобільним меню
    mobileBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('.mobile-menu'),
    mobileBtnClose: document.querySelector('.mobile-menu-close'),
  };

  refs.openModalBtn?.addEventListener('click', toggleModal);
  refs.closeModalBtn?.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  refs.mobileBtn.addEventListener('click', function () {
    refs.mobileMenu.classList.add('open');
    refs.mobileMenu.classList.remove('closing');
  });

  function closeMenu() {
    refs.mobileMenu.classList.add('closing');
    setTimeout(() => {
      refs.mobileMenu.classList.remove('open', 'closing');
    }, 300); // Matches the transition duration (0.3s)
  }

  refs.mobileBtnClose.addEventListener('click', closeMenu);

  // Close menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (
      !refs.mobileMenu.contains(event.target) &&
      !refs.mobileBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });
})();
