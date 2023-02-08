const inputEl = document.querySelector('#validation-input');
const validValue = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
  inputEl.classList.remove('valid', 'invalid');

  inputEl.value.length === Number(validValue)
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
});
