const categEl = document.querySelector('#categories');
const itemsEl = categEl.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);
console.log('');

const titlesEl = [];
itemsEl.forEach(elem => {
  console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length
  );
  console.log('');
});
