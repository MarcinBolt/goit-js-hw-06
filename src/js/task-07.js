const fontSizeControlInput = document.querySelector('#font-size-control');
const controlSpan = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', event => {
  controlSpan.style.fontSize = `${fontSizeControlInput.value}px`;
});
