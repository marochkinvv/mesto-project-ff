export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  modal.addEventListener('mousedown', closeByOverlay);
  modal.addEventListener('click', closeByButton);
  document.addEventListener('keydown', closeByEsc);
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  const modalIsOpened = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closeModal(modalIsOpened);
  }
}

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    closeModal(evt.target);
  }
}

function closeByButton(evt) {
  const modalIsOpened = document.querySelector('.popup_is-opened');
  if (evt.target.classList.contains('popup__close')) {
    closeModal(modalIsOpened);
  }
}
