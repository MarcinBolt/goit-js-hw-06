const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value');
let counter = 0;

const clickDecrementing = () => {
  counter -= 1;
  counterValue.textContent = counter;
};
const clickIncrementing = () => {
  counter += 1;
  counterValue.textContent = counter;
};

buttonDecrement.addEventListener('click', clickDecrementing);
buttonIncrement.addEventListener('click', clickIncrementing);
