import { openModal, modalCardImage } from "./modal";
  
const cardTemplate = document.querySelector('#card-template').content;

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export function createCard(obj, deleteCard, like, showCardImage) {
  const cardElementClone = cardTemplate
    .querySelector('.places__item.card')
    .cloneNode(true);
  const cardLikeButton = cardElementClone.querySelector('.card__like-button');
  cardElementClone.querySelector('.card__image').src = obj.link;
  cardElementClone.querySelector('.card__title').textContent = obj.name;
  cardElementClone.querySelector('.card__image').addEventListener('click', () => {
    showCardImage(obj);
    openModal(modalCardImage);
  });
  cardElementClone
    .querySelector('.card__delete-button')
    .addEventListener('click', () => {
      deleteCard(cardElementClone);
    });
  cardElementClone
    .querySelector('.card__like-button')
    .addEventListener('click', () => {
      like(cardLikeButton);
    });

  return cardElementClone;
}

export function deleteElement(elem) {
  elem.remove();
}

export function like(elem) {
  elem.classList.toggle('card__like-button_is-active');
}

export function showCardImage (obj) {
  const modalCardImage = document.querySelector('.popup__image');
  const modalCardTitle = document.querySelector('.popup__caption');
  modalCardImage.src = obj.link;
  modalCardTitle.textContent = obj.name;
}