const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;

buttonDecrement.addEventListener('click', () => {
    counterValue.textContent -=1;
});
buttonIncrement.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent)+1;
});