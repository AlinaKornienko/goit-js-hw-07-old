const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesEl = document.querySelector('#gallery');

const createImagesCardsEl = ({url, alt}) => {
const imagesItemEl = document.createElement('li');
imagesItemEl.classList.add('gallery');

const imagesCardEl = document.createElement('img');
imagesCardEl.src = url;
imagesCardEl.alt = alt;
imagesCardEl.width = 380;
imagesCardEl.height = 200;
imagesCardEl.classList.add('gallery__item');

imagesItemEl.append(imagesCardEl);

return imagesItemEl;
};

const elements = images.map(createImagesCardsEl);
console.log(elements);
imagesEl.append(...elements);


// const createImagesCardsEl = ({url, alt}) => {
// const imagesItemEl = document.createElement('li');
// imagesItemEl.classList.add('gallery');
 
// const imagesCardEl = document.createElement('img');
// imagesCardEl.src = url;
// imagesCardEl.alt = alt;
// imagesCardEl.width = 480;
// imagesCardEl.classList.add('gallery__item');

// imagesItemEl.append(imagesCardEl);
// return imagesItemEl;
// };

// console.log(images);
// const imagesEl = document.querySelector('#gallery');
// const createElements = images
// .map(createImagesCardsEl);
// .join('');

// imagesEl.insertAdjacentElement('afterbegin', createElements);
// console.log(createElements);