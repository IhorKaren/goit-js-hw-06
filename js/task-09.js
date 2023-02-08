function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

colorButton.addEventListener('click', function () {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
});
