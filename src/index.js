import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, deleteElement, like } from './scripts/card';
import { closeModal, openModal } from './scripts/modal';

const placesList = document.querySelector('.places__list');
const buttonsCloseModal = document.querySelectorAll('.popup__close');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const modals = document.querySelectorAll('.popup');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalAddCard = document.querySelector('.popup_type_new-card');
const modalShowCard = document.querySelector('.popup_type_image');
const modalCardImage = document.querySelector('.popup__image');
const modalCardTitle = document.querySelector('.popup__caption');
const formEditProfile = document.forms['edit-profile'];
const nameInputProfile = formEditProfile.elements.name;
const jobInputProfile = formEditProfile.elements.description;
const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');
const formAddCard = document.forms['new-place'];
const nameAddCard = formAddCard.elements['place-name'];
const linkAddCard = formAddCard.elements.link;

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteElement, like, showCardImage);
  placesList.append(cardElement);
});

buttonEditProfile.addEventListener('click', () => {
  openModal(modalEditProfile);
  getProfile();
});

buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  openModal(modalAddCard);
});

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    closeModal(evt.target);
  }
}

modals.forEach((modal) => {
  modal.addEventListener('mousedown', closeByOverlay);
});

buttonsCloseModal.forEach((button) => {
  const parentModal = button.closest('.popup');
  button.addEventListener('click', () => {
    closeModal(parentModal);
  });
});

function showCardImage(obj) {
  modalCardImage.src = obj.link;
  modalCardImage.alt = obj.name;
  modalCardTitle.textContent = obj.name;
  openModal(modalShowCard);
}

function getProfile() {
  nameInputProfile.value = titleProfile.textContent;
  jobInputProfile.value = descriptionProfile.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInputProfile.value;
  descriptionProfile.textContent = jobInputProfile.value;
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', handleFormSubmit);

function addCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = nameAddCard.value;
  newCard.link = linkAddCard.value;

  const cardElement = createCard(newCard, deleteElement, like, showCardImage);
  placesList.prepend(cardElement);
  closeModal(modalAddCard);
  formAddCard.reset();
}

formAddCard.addEventListener('submit', addCardFormSubmit);
