function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanChangeColor = document.querySelector('.color');
const bodyTag = document.querySelector('body');

btnChangeColor.addEventListener('click', event => {
  let randomColor = getRandomHexColor();
  spanChangeColor.textContent = randomColor;
  bodyTag.style.backgroundColor = randomColor;
});
