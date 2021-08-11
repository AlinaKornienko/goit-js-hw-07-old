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

// const image = images [0];

// const imagesItemEl = document.createElement('li');
// imagesItemEl.classList.add('gallery');

// const imagesCardEl = document.createElement('img');
// imagesCardEl.src = image.url;
// imagesCardEl.alt = image.alt;
// imagesCardEl.width = 380;
// imagesCardEl.classList.add('gallery__item');

// imagesItemEl.append(imagesCardEl);
// console.log(imagesItemEl);
// imagesEl.append(imagesItemEl);


const createImagesCardsEl = options => {
  return options.map(option => {
const imagesItemEl = document.createElement('li');
imagesItemEl.classList.add('gallery');

const imagesCardEl = document.createElement('img');
imagesCardEl.src = option.url;
imagesCardEl.alt = option.alt;
imagesCardEl.width = 480;
imagesCardEl.classList.add('gallery__item');

imagesItemEl.append(imagesCardEl);

return imagesCardEl;
  });
};
const elements = createImagesCardsEl(images);
imagesEl.append(...elements);