export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
  deleteErrors(modal);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const modalIsOpened = document.querySelector('.popup_is-opened');
    closeModal(modalIsOpened);
  }
}

function deleteErrors(modal) {
  const errorMessages = modal.querySelectorAll('.popup__error');
  const errorInputs = modal.querySelectorAll('.popup__input');
  errorMessages.forEach((message) => {
    message.classList.remove('popup__error_visible');
    message.textContent = '';
  });
  errorInputs.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
}
