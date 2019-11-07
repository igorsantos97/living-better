export default function initModal() {
  const openButton = document.querySelector('[data-modal="abrir"]');
  const closeButton = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openButton && closeButton && containerModal) {

    function toggleModal(e) {
      e.preventDefault();

      containerModal.classList.toggle('ativo');
    }

    function clickOutsideModal(e) {
      console.log(e.target);

      if (e.target === this) {
        toggleModal(e);
      }
    }

    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutsideModal);
  }
}

