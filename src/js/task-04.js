const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;

function onButtonDecrementClick (){
    counterValue.textContent -=1;
};
function onButtonIncrementClick (){
    counterValue.textContent = Number(counterValue.textContent)+1;
};
buttonDecrement.addEventListener('click', onButtonDecrementClick);
buttonIncrement.addEventListener('click', onButtonIncrementClick);