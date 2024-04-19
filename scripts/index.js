// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const cardElement = cardTemplate.querySelector('.places__item.card');

// @todo: Функция создания карточки
function addCard(cardsArray, deleteCard) {
  cardsArray.forEach(function (item) {
    const cardElementClone = cardTemplate
      .querySelector('.places__item.card')
      .cloneNode(true);
    cardElementClone.querySelector('.card__image').src = item.link;
    cardElementClone.querySelector('.card__title').textContent = item.name;
    placesList.append(cardElementClone);
  });

  const cards = placesList.querySelectorAll('.card');
  for (let card of cards) {
    const cardDeleteButton = card.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => {
      deleteCard(card);
    });
  }
}

// @todo: Функция удаления карточки
function deleteElement(elem) {
  elem.remove();
}

// @todo: Вывести карточки на страницу
addCard(initialCards, deleteElement);
