function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  createBoxes(inputEl.value);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let defaultSize = 30;
  let newSize = 0;

  for (let i = 0; i <= amount; i += 1) {
    let box = document.createElement('div');
    newSize = defaultSize + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px; 
    background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}
