var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

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







function onGalleryClick(evt) {
  
  function closeModalOnEscapeClick(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: () => gallery.addEventListener("keydown", closeModalOnEscapeClick),
      onClose: () => gallery.removeEventListener("keydown", closeModalOnEscapeClick),
    }
  );

}
