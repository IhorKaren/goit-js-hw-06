const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value === '') {
    return alert('All fields must be filled!');
  }
  console.log({
    login: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
}
