import { closeModal, modalEditProfile, modalAddCard } from './modal';
import {
  initialCards,
  createCard,
  deleteElement,
  like,
  showCardImage,
} from './cards';

const formEditProfile = document.forms['edit-profile'];
const nameInputProfile = formEditProfile.elements.name;
const jobInputProfile = formEditProfile.elements.description;
const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');

const formAddCard = document.forms['new-place'];
const nameAddCard = formAddCard.elements['place-name'];
const linkAddCard = formAddCard.elements.link;

const placesList = document.querySelector('.places__list');

export function getProfile() {
  nameInputProfile.value = titleProfile.textContent;
  jobInputProfile.value = descriptionProfile.textContent;
}

export function resetForm(form) {
  form.reset();
}

export function handleFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInputProfile.value;
  descriptionProfile.textContent = jobInputProfile.value;
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', handleFormSubmit);

export function addCardFormSubmit(evt) {
  evt.preventDefault();
  const newObj = {};
  newObj.name = nameAddCard.value;
  newObj.link = linkAddCard.value;
  initialCards.unshift(newObj);

  const cardElement = createCard(
    initialCards[0],
    deleteElement,
    like,
    showCardImage
  );
  placesList.prepend(cardElement);
  closeModal(modalAddCard);
  resetForm(formAddCard);
}

formAddCard.addEventListener('submit', addCardFormSubmit);
