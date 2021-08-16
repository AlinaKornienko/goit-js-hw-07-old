const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.value = Number.parseInt(window.getComputedStyle(textEl).fontSize);

fontSizeEl.addEventListener('input', onInputChange);

function onInputChange({ currentTarget }) {
    textEl.style.fontSize = `${currentTarget.value}px`;
}