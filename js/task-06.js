const inputEl = document.querySelector('#validation-input');
const validValue = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
  inputEl.value.length === validValue
    ? inputEl.classList.toggle('valid')
    : inputEl.classList.toggle('invalid');
});
