const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
// let counterValue = document.querySelector('#value');
let counterValue = 0;

const clickDecrementing = () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
};
const clickIncrementing = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};

buttonDecrement.addEventListener('click', clickDecrementing);
buttonIncrement.addEventListener('click', clickIncrementing);
