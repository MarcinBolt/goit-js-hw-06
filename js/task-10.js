function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i++) {
    let divBGColor = getRandomHexColor();
    let currentDiv = `<div style="background-color: ${divBGColor}; width: ${divWidth}px; height: ${divHeight}px;"></div>`;
    tableOfDiv.push(currentDiv);
    divWidth += 10;
    divHeight += 10;
  }

  const markup = tableOfDiv.map(element => `${element}`).join('');
  divBoxes.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  divBoxes.remove();
  divControl.insertAdjacentHTML('afterend', `<div id="boxes"></div>`);
  tableOfDiv = [];
  numberInput.value = '';

  return (divBoxes = document.querySelector('div#boxes'));
}

const numberInput = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
let divBoxes = document.querySelector('div#boxes');
const divControl = document.querySelector('div#controls');
let tableOfDiv = [];

buttonCreate.addEventListener('click', event => {
  createBoxes(numberInput.value);
});
buttonDestroy.addEventListener('click', event => {
  destroyBoxes();
});
