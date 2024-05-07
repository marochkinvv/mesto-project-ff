export function openModal(modal) {
  modal.classList.add('popup_is-opened');

  modal.addEventListener('mousedown', closeBy);
  document.addEventListener('keydown', closeBy);
}

export function closeModal(modal) {
  if (!modal.classList.contains('popup_is-opened')) return;

  modal.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closeBy);
}

function closeBy(evt) {
  const modalIsOpened = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape' || evt.target === modalIsOpened) {
    closeModal(modalIsOpened);
  }
}
