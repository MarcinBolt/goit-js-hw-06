function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i++) {
    const currentDiv = document.createElement('div');
    currentDiv.style.backgroundColor = getRandomHexColor();
    currentDiv.style.width = `${divWidth}px`;
    currentDiv.style.height = `${divHeight}px`;
    tableOfDiv.push(currentDiv);
    divWidth += 10;
    divHeight += 10;
  }
  divBoxes.append(...tableOfDiv);
}

function destroyBoxes() {
  divBoxes.textContent = '';
  tableOfDiv = [];
  numberInput.value = '';
}

const numberInput = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('div#boxes');
const divControl = document.querySelector('div#controls');
let tableOfDiv = [];

buttonCreate.addEventListener('click', event => {
  createBoxes(Number(numberInput.value));
});
buttonDestroy.addEventListener('click', event => {
  destroyBoxes();
});
