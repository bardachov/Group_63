/**
 * Одна стаття має
 * 1. Заголовок
 * 2. Опис/контент
 * 3. Картинку 
 * 4. Посилання на статтю
 */

/**
 * 1. Додати  click listener до кнопки пошуку
 * 2. Написати функцію відправки запиту і обробки відповіді
 * 3. Написати функцію рендеру.
 * 
 * Доп завдання:
 * 1. Додати логіку debounce на поле вводу.
 *    Онвлювати новини лише після вводу як мінімум трьох символів і через 300 ms після завершення вводу
 * 
 * 2. Зробити гарний інтерфейс :)
 */

const API_KEY = '758eaee05362425590906fb4540c32ad';

const searchBtnRef = document.getElementById('searchCtr');
const searchField = document.getElementById('searchNewsField');
const articlesContainer = document.getElementById('articles');


searchBtnRef.addEventListener('click', e => {
  getNewsAxios({
    query: searchField.value
  })
});

/**
 * 
 * Функція запити і обробки відповіді. З використанням бібліотеки axios
 */
function getNewsAxios({query}) {
  const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&apiKey=${API_KEY}`;
  
  axios.get(urlAPI)
  .then(res => res.data)
  .then(({articles}) => render(articles))
  .catch(error => console.log(error))
}

/**
 * 
 * Функція запити і обробки відповіді. З використанням нативного методу fetch
 */
function getNews ({query}) {
  const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&apiKey=${API_KEY}`;

  fetch(urlAPI).then(res => {
    
    if(!res.ok) {
      throw new Error(res.message)
    }

    return res.json()
  })
  .then(({articles}) => {
    render(articles)
  })
}

/**
 * 
 * Функція рендеру
 */
function render (articles) {
  articlesContainer.innerHTML = '';

  // Варіант 1
  // articles.forEach(({title, description, url, urlToImage}) => {
  //   const articleEl = `<article class="news">
  //   <h2>${title}</h2>
  //   <div>${description}</div>
  //   <img src="${urlToImage}" alt="${title}">
  //   <a href="${url}">more</a>
  // </article>`;
    
  // articlesContainer.insertAdjacentHTML('beforeend', articleEl)
  // });

  //Варіант 2
  const artilesElements = articles.map(({title, description, url, urlToImage}) => {
    return `<article class="news">
    <h2>${title}</h2>
    <div>${description}</div>
    <img src="${urlToImage}" alt="${title}">
    <a href="${url}">more</a>
  </article>`;
  });

  articlesContainer.insertAdjacentHTML('beforeend', artilesElements.join(''))
}

























/** розгляд питань */
// const response = {
//   ok: false,
//   status: 200
// }

// let customError;
// if (!response.ok) {
//   throw 'I faced an error';
// }

// console.log(customError)