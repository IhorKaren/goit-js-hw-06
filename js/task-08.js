const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
