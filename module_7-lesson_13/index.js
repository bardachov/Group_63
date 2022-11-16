/** Task 1. Calculator */
const form = document.querySelector('.form');
const quantityRef = document.querySelector('.amount');
const totalRef = document.createElement('span');

const imagesContainer = document.querySelector('.images-gallery');

form.append(totalRef)

totalRef.before('Загальна вартість: ');
totalRef.after(' ГРН.');

const formHandler = (form) => {

  const {
    elements: {
      price,
      quantity
    }
  } = form;

  const totalPrice = Number(price.value * quantity.value).toFixed(2);

  totalRef.innerHTML = totalPrice;
  quantityRef.innerHTML = quantity.value;
}

form.addEventListener('input', e => {
  formHandler(e.currentTarget)
});

/** Task 2. Image gallery */
const images =  [
  {
    "title": "Коник стрибунець",
    "src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg" 
  },
  {
    "title": "Фрукт",
    "src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
  },
  {
    "title": "Люди",
    "src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
  },
  {
    "title": "Годиник",
    "src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg" 
  },
  {
    "title": "Метро",
    "src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
  },
  {
    "title": "Хмари",
    "src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
  },
]

const imgModal = document.querySelector('.image-modal-overlay');
const modalContent = document.querySelector('.image-modal');

images.forEach(({src, title}) => {

  const imgEl = document.createElement('img');
  imgEl.src = src;
  imgEl.alt = title;

  imagesContainer.append(imgEl)

});

imagesContainer.addEventListener('click', e => {
  if(e.target.nodeName === 'IMG') {
    modalContent.innerHTML = e.target.getAttribute('alt')
    imgModal.classList.add('visible')
  }
});

imgModal.addEventListener('click', e => {
  e.currentTarget.classList.remove('visible')
})

document.addEventListener('DOMContentLoaded', e => {
  formHandler(form)
})


