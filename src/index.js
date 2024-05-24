import './pages/index.css';
import {
  getCardsData,
  getMyProfile,
  editMyProfile,
  addCard,
  addLike,
  deleteLike,
  deleteСardFromServer,
  editAvatar,
} from './scripts/api';
import { createCard, deleteCard, toggleLike } from './scripts/card';
import { closeModal, openModal } from './scripts/modal';
import { clearValidation, enableValidation } from './scripts/validation';

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
const modalEditAvatar = document.querySelector('.popup_type_avatar');
const formEditProfile = document.forms['edit-profile'];
const nameInputProfile = formEditProfile.elements.name;
const jobInputProfile = formEditProfile.elements.description;
const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');
const formAddCard = document.forms['new-place'];
const nameAddCard = formAddCard.elements['place-name'];
const linkAddCard = formAddCard.elements.link;
const formEditAvatar = document.forms['avatar'];
const avatarLink = formEditAvatar.elements.link;
const modalFormElements = document.querySelectorAll('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const promises = [getCardsData(), getMyProfile()];

// Отрисовка профиля и карточек на странице
Promise.all(promises).then(([cards, user]) => {
  profileImage.src = user.avatar;
  profileName.textContent = user.name;
  profileDescription.textContent = user.about;

  cards.forEach((cardData) => {
    const cardElement = createCard(
      cardData,
      toggleLike,
      deleteCard,
      showCardImage,
      user._id,
      deleteСardFromServer,
      addLike,
      deleteLike
    );
    placesList.append(cardElement);
  });
});

profileImage.addEventListener('click', () => {
  formEditAvatar.reset();
  openModal(modalEditAvatar);
});

buttonEditProfile.addEventListener('click', () => {
  nameInputProfile.value = titleProfile.textContent;
  jobInputProfile.value = descriptionProfile.textContent;
  openModal(modalEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  openModal(modalAddCard);
});

// Закрытие модальных окон по клику на оверлэй
function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    closeModal(evt.target);
  }
}

modals.forEach((modal) => {
  modal.addEventListener('mousedown', closeByOverlay);
});

// Закрытие модальных окон по клику на кнопку закрытия
buttonsCloseModal.forEach((button) => {
  const parentModal = button.closest('.popup');
  button.addEventListener('click', () => {
    closeModal(parentModal);
  });
});

// Функция открытия крупного изображения в модальном окне
function showCardImage(obj) {
  modalCardImage.src = obj.link;
  modalCardImage.alt = obj.name;
  modalCardTitle.textContent = obj.name;
  openModal(modalShowCard);
}

// Функция изменения данных профиля
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(formEditProfile, true);
  editMyProfile(nameInputProfile.value, jobInputProfile.value)
    .then(({ name, about }) => {
      titleProfile.textContent = name;
      descriptionProfile.textContent = about;
    })
    .catch((err) => {
      console.log(`Ошибка. ${err}`);
    })
    .finally(() => {
      renderLoading(formEditProfile, false);
    });
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

// Функция изменения аватара профиля
function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(formEditProfile, true);
  editAvatar(avatarLink.value)
    .then((data) => {
      profileImage.src = data.avatar;
    })
    .catch((err) => {
      console.log(`Ошибка. ${err}`);
    })
    .finally(() => {
      renderLoading(formEditProfile, false);
    });
  closeModal(modalEditAvatar);
}

formEditAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

// Функция добавления новой карточки
Promise.all(promises).then(([cards, user]) => {
  function addCardFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(formAddCard, true);
    addCard(nameAddCard.value, linkAddCard.value)
      .then((newCardData) => {
        const newCardElement = createCard(
          newCardData,
          toggleLike,
          deleteCard,
          showCardImage,
          user._id,
          deleteСardFromServer,
          addLike,
          deleteLike
        );
        placesList.prepend(newCardElement);
        closeModal(modalAddCard);
        formAddCard.reset();
      })
      .catch((err) => {
        console.log(`Ошибка при добавлении карточки. ${err}`);
      })
      .finally(() => {
        renderLoading(formAddCard, false);
      });
  }
  formAddCard.addEventListener('submit', addCardFormSubmit);
});

// Объект-конфигуратор для валидации форм
const formElementsObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// Вызов функции валидации форм
enableValidation(formElementsObject);

// Вызов функции сброса валидации форм при закрытии модальных окон
modalFormElements.forEach((formElement) => {
  clearValidation(formElement, formElementsObject);
});

// Фунция отображения лоадера
function renderLoading(form, isLoading) {
  const button = form.querySelector('.popup__button');
  if (isLoading) {
    button.textContent = 'Сохранение...';
    button.disabled = true;
  } else {
    button.textContent = 'Сохранить';
  }
}