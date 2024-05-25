const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(
  card,
  toggleLike,
  deleteCard,
  showCardImage,
  currentUserId,
  deleteCardFunction,
  addLike,
  deleteLike
) {
  const cardId = card._id;
  const cardLikesArray = card.likes;
  const cardOwner = card.owner;
  // Получаем клон template
  const cardElementClone = cardTemplate.querySelector('.card').cloneNode(true);
  cardElementClone.dataset.uid = cardId;
  // Получаем кнопку лайка
  const cardLikeButton = cardElementClone.querySelector('.card__like-button');
  // Получаем span со счетчиком лайков. Присваиваем значение дата-атрибуту. Добавляем значение в контент
  const cardLikeCounter = cardElementClone.querySelector('.card__like-counter');
  // Получаем заголовок карточки. Добавляем значение в контент
  const cardTitle = cardElementClone.querySelector('.card__title');
  cardTitle.textContent = card.name;
  // Получаем изображение карточки, ссылку на изображение и заголовок
  const cardImage = cardElementClone.querySelector('.card__image');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  // Получаем кнопку удаления карточки
  const cardDeleteButton = cardElementClone.querySelector(
    '.card__delete-button'
  );
  // Если карточка не принадлежит текущему пользователю, тогда удаляем кнопку удаления карточки
  if (!findProfileIdInObject(cardOwner, currentUserId)) {
    cardDeleteButton.remove();
  }

  cardImage.addEventListener('click', () => {
    showCardImage(card);
  });

  cardDeleteButton.addEventListener('click', () => {
    deleteCardFunction(cardId)
      .then(() => {
        deleteCard(cardElementClone);
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки. ${err}`);
      });
  });

  // Если у карточки есть лайки, тогда отображаем счетчик лайков
  if (cardLikesArray.length > 0) {
    cardLikeButton.classList.add('card__like-button_has-like');
    cardLikeCounter.classList.add('card__like-counter_visible');
    cardLikeCounter.textContent = cardLikesArray.length;
  } else {
    cardLikeButton.classList.remove('card__like-button_has-like');
    cardLikeCounter.classList.remove('card__like-counter_visible');
    cardLikeCounter.textContent = '';
  }

  // Если один из лайков принадлежит текущему пользователю, тогда при отрисовке карточки визуализируем лайк
  if (cardElementClone.dataset.uid === cardId) {
    if (findProfileIdInArray(cardLikesArray, currentUserId)) {
      cardLikeButton.classList.add('card__like-button_is-active');
    } else if (!findProfileIdInArray(cardLikesArray, currentUserId)) {
      cardLikeButton.classList.remove('card__like-button_is-active');
    }
  }

  function handleLikes() {
    if (cardElementClone.dataset.uid === cardId) {
      if (!cardLikeButton.classList.contains('card__like-button_is-active')) {
        addLike(cardId)
          .then((data) => {
            return data.likes.length;
          })
          .then((data) => {
            if (data > 0) {
              cardLikeButton.classList.add('card__like-button_has-like');
              cardLikeCounter.classList.add('card__like-counter_visible');
            } else {
              cardLikeButton.classList.remove('card__like-button_has-like');
              cardLikeCounter.classList.remove('card__like-counter_visible');
            }
            cardLikeCounter.textContent = data;
          })
          .catch((err) => {
            console.log(`Ошибка при добавлении лайка. ${err}`);
          });
      } else if (
        cardLikeButton.classList.contains('card__like-button_is-active')
      ) {
        deleteLike(cardId)
          .then((data) => {
            return data.likes.length;
          })
          .then((data) => {
            if (data > 0) {
              cardLikeButton.classList.add('card__like-button_has-like');
              cardLikeCounter.classList.add('card__like-counter_visible');
            } else {
              cardLikeButton.classList.remove('card__like-button_has-like');
              cardLikeCounter.classList.remove('card__like-counter_visible');
            }
            cardLikeCounter.textContent = data;
          })
          .catch((err) => {
            console.log(`Ошибка при удалении лайка. ${err}`);
          });
      }
    }
  }

  cardLikeButton.addEventListener('click', () => {
    handleLikes();
    toggleLike(cardLikeButton);
  });

  return cardElementClone;
}

export function deleteCard(card) {
  card.remove();
}

export function toggleLike(button) {
  button.classList.toggle('card__like-button_is-active');
}

function findProfileIdInArray(array, key) {
  let isElement = false;
  for (let i = 0; i < array.length; i++) {
    const elementValuesArray = Object.values(array[i]);
    const filter = elementValuesArray.some((item) => {
      return item === key;
    });
    if (!filter) {
      continue;
    } else {
      isElement = true;
    }
  }
  return isElement;
}

function findProfileIdInObject(object, key) {
  let isElement = false;
  const elementValuesArray = Object.values(object);
  const filter = elementValuesArray.some((item) => {
    return item === key;
  });
  if (filter) {
    isElement = true;
  }
  return isElement;
}
