const cardTemplate = document.querySelector('#card-template').content;

export function createCard(obj, deleteCard, like, showCardImage) {
  const cardElementClone = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLikeButton = cardElementClone.querySelector('.card__like-button');
  const cardDeleteButton = cardElementClone.querySelector(
    '.card__delete-button'
  );
  const cardImage = cardElementClone.querySelector('.card__image');

  cardImage.src = obj.link;
  cardImage.alt = obj.name;
  cardElementClone.querySelector('.card__title').textContent = obj.name;
  cardImage.addEventListener('click', () => {
    showCardImage(obj);
  });
  cardDeleteButton.addEventListener('click', () => {
    deleteCard(cardElementClone);
  });
  cardLikeButton.addEventListener('click', () => {
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
