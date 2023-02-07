const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('[id="value"]');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtnEl.addEventListener('click', function onIncrementValue() {
  counter.increment();
  valueEl.textContent = counter.value;
});

decrementBtnEl.addEventListener('click', function onDecrementValue() {
  counter.decrement();
  valueEl.textContent = counter.value;
});
