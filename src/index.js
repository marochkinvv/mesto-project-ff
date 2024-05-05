import './pages/index.css';
import { initialCards, createCard, deleteElement, like, showCardImage } from './scripts/cards';
import {
  closeModal,
  openModal,
  modals,
  modalEditProfile,
  modalAddCard,
  modalCardImage,
} from './scripts/modal';
import {
  getProfile,
  resetForm,
} from './scripts/forms';

const placesList = document.querySelector('.places__list');
const buttonsCloseModal = document.querySelectorAll('.popup__close');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const formNewCard = document.forms['new-place'];

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteElement, like, showCardImage);
  placesList.append(cardElement);
});

buttonEditProfile.addEventListener('click', () => {
  openModal(modalEditProfile);
  getProfile();
});

buttonAddCard.addEventListener('click', () => {
  resetForm(formNewCard);
  openModal(modalAddCard);
});

buttonsCloseModal.forEach(function (button) {
  button.addEventListener('click', () => {
    closeModal(modalEditProfile);
    closeModal(modalAddCard);
    closeModal(modalCardImage);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal(modalEditProfile);
    closeModal(modalAddCard);
    closeModal(modalCardImage);
  }
  event.target.removeEventListener('keydown', event);
});

modals.forEach(function (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modalEditProfile);
      closeModal(modalAddCard);
      closeModal(modalCardImage);
    }
  });
});
