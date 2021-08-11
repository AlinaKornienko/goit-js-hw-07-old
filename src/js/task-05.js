const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(currentTarget.value);
};
