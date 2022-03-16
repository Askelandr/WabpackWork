/**
 * Функция валидации инпута
 * @param {string} selectorInput
 * @param {string} selectorError
 */
export default function validInput(selectorInput, selectorError) {
  let email;
  let inputGetEmail = document.querySelector(selectorInput);
  let errorEmailInput = document.querySelector(selectorError);
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myMail = inputGetEmail.value;
  let valid = re.test(myMail);

  if (inputGetEmail.value === "") {
    errorEmailInput.innerHTML = "Поле должно быть заполнено";
    errorEmailInput.style.opacity = 1;
  } else if (!valid) {
    errorEmailInput.style.opacity = 0;
    errorEmailInput.innerHTML = "Введен некорректный email";
    errorEmailInput.style.opacity = 1;
  } else {
    email = inputGetEmail.value;

    errorEmailInput.style.opacity = 0;
    inputGetEmail.value = "";
  }
}
