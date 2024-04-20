// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const cardElement = cardTemplate.querySelector('.places__item.card');

// @todo: Функция создания карточки
function createCard(obj, deleteCard) {
  const cardElementClone = cardTemplate
    .querySelector('.places__item.card')
    .cloneNode(true);
  cardElementClone.querySelector('.card__image').src = obj.link;
  cardElementClone.querySelector('.card__title').textContent = obj.name;
  cardElementClone
    .querySelector('.card__delete-button')
    .addEventListener('click', () => {
      deleteCard(cardElementClone);
    });

  return cardElementClone;
}

// @todo: Функция удаления карточки
function deleteElement(elem) {
  elem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteElement);
  placesList.append(cardElement);
});
