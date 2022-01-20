// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
const input = document.querySelector('#validation-input');
const inputValidation = input.dataset.length;

const borderColor = (event) => {
    return event.target.value.length == inputValidation ?
        input.setAttribute('class', 'valid') :
        input.setAttribute('class', 'invalid');
}

input.addEventListener('blur', borderColor);