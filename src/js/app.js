import img from '../img/goblin.png';
import getRandomIntInclusive from './get-random';

function getEmptyItem() {
  const emptyItem = document.createElement('div');
  emptyItem.classList.add('item');

  return emptyItem;
}

function getImg() {
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', img);
  imgEl.setAttribute('alt', 'goblin');

  return imgEl;
}

const container = document.querySelector('#app');

const field = document.createElement('div');
field.classList.add('field-container');
container.appendChild(field);

for (let i = 0; i < 4; i += 1) {
  field.appendChild(getEmptyItem());
}

let items = field.querySelectorAll('.item');

let currentIndex = getRandomIntInclusive(0, 3);
items[currentIndex].appendChild(getImg());

setInterval(() => {
  const imgItem = field.querySelector('img');
  const currentParent = imgItem.closest('.item');
  const arrOfIndexes = [0, 1, 2, 3, 4].filter((item) => item !== currentIndex);
  const randomIndex = getRandomIntInclusive(0, 2);
  currentIndex = arrOfIndexes[randomIndex];

  const emptyItem = getEmptyItem();

  field.replaceChild(emptyItem, currentParent);

  items = field.querySelectorAll('.item');
  items[currentIndex].appendChild(getImg());
}, 1000);
