const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.createElement('ul');
listEl.classList.add('ingredients');
console.log(listEl);
document.body.appendChild(listEl);

const.element = ingredients.map (option => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  console.log(itemEl.textContent);
  

  return itemEl;
});
// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// console.log(itemEl.textContent);
// itemEl.textContent = ingredients[0];
// console.log(itemEl);
// document.body.appendChild(itemEl);

// listEl.appendChild(itemEl); 
// console.log(listEl);
