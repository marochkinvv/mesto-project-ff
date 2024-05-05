export const modals = document.querySelectorAll('.popup');
export const modalEditProfile = document.querySelector('.popup_type_edit');
export const modalAddCard = document.querySelector('.popup_type_new-card');
export const modalCardImage = document.querySelector('.popup_type_image');

export function closeModal(modal) {
  if (!modal.classList.contains('popup_is-opened')) return;

  modal.classList.remove('popup_is-opened');
  modal.classList.add('popup_is-animated');
}

export function openModal(modal) {
  modal.classList.remove('popup_is-animated');
  modal.classList.add('popup_is-opened');
}
