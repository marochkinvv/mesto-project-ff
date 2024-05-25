export const enableValidation = (formElement, validationConfig) => {
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClassActive);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClassActive);
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClassActive);
    errorElement.classList.remove(validationConfig.errorClassActive);
    errorElement.textContent = '';
  };

  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity('');
    }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
  };

  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export function deleteErrors(modal, validationConfig) {
  const errorMessages = modal.querySelectorAll(validationConfig.errorSelector);
  const errorInputs = modal.querySelectorAll(validationConfig.inputSelector);
  const buttonSubmit = modal.querySelector(
    validationConfig.submitButtonSelector
  );
  errorMessages.forEach((message) => {
    message.classList.remove(validationConfig.errorClassActive);
    message.textContent = '';
  });
  errorInputs.forEach((input) => {
    input.classList.remove(validationConfig.inputErrorClassActive);
  });
  buttonSubmit.classList.add(validationConfig.inactiveButtonClass);
}
