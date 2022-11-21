

/**
 * debounce - викликає функцію коли пройшло N кіклькість мілісекнд після подіїї.
 * throttle - викликає функцию кожні N мілісекунд впродов дії події.
 * Обидва методи повертають нову функцію
 */

const scrollEventAmount = document.querySelector('.scroll-amount');
const resizeEventAmount = document.querySelector('.resize-amount');

const scrollEventHandler = e => {
  let value = scrollEventAmount.innerHTML;
  value = Number(value) + 1;

  scrollEventAmount.innerHTML = value
};

const resizeEventHandler = e => {
  let value = resizeEventAmount.innerHTML;
  value = Number(value) + 1;

  resizeEventAmount.innerHTML = value
};

// const throttledScrollHandler =  _.throttle(scrollEventHandler, 1000);

window.addEventListener('scroll', _.throttle(scrollEventHandler, 1000))
window.addEventListener('resize', _.throttle(resizeEventHandler, 1000));



const userNameRef = document.querySelector('#userName');
const errorMessageRef = document.querySelector('.validate-message');

const debouncedUserNameHandler = _.debounce(() => {
  console.log(userNameRef.value.length)

  if (userNameRef.value.length <= 3) {
    errorMessageRef.textContent = 'Too short'
  } else {
    errorMessageRef.textContent = 'Good'
  }
}, 500)

userNameRef.addEventListener('input', debouncedUserNameHandler)





// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// function closeModalOnEscapeClick(evt) {
//   console.log(instance)
//   console.log(this)
  
//   if (evt.key === "Escape") {
//     instance.close();
//   }
// }


// Варіант 1
const initBasicGallery = () => {
  let instance;
  const basicLightBox = document.querySelector('.basic-ligh-box');

  basicLightBox.addEventListener('click', e => {
    instance = basicLightbox.create(`<img src="${e.target.src}">`);
    instance.show()
  });

  document.addEventListener('keydown', e => {
  
    if (!instance) return
    
    if (e.key === "Escape") {
      instance.close();
      instance = undefined
    }
  })

}

initBasicGallery()


// Варіант 2. Так теж буде працювати
function closeModalOnEscapeClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}

const basicLightBox = document.querySelector('.basic-ligh-box');
basicLightBox.addEventListener('click', e => {
  
  instance = basicLightbox.create(`<img src="${e.target.src}">`, {
    onShow: () => document.addEventListener("keydown", closeModalOnEscapeClick),
    onClose: () => document.removeEventListener("keydown", closeModalOnEscapeClick),
  });

  instance.show()
});
