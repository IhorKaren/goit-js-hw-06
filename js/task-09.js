function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

colorButton.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
});