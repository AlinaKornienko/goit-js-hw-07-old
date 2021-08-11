const div = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const buttonDecrement = div.firstElementChild;
const buttonIncrement = div.lastElementChild;

function decrement(){
    counterValue.textContent -=1;
};
function increment(){
    counterValue.textContent = Number(counterValue.textContent)+1;
}
buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);