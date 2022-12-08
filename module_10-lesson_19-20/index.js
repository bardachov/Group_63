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


/** 
 * Заняття 20. Додати до новин пагінацію по 8 новин на сторінці
 * 
 * 1. Зберігати поточну сторінку. І константу кількості елементів на сторінці
 * 2. Треба відобразити всі сторінки. Загальну кількість елементів поділити на кулькість елементів на одній сторінці
 * 3. Повісити клік на номер сторінки. Сформувати запит до апи. Викликати відповідну функцію запиту. Оновити поточну сторінку
 * 
 * */

const API_KEY = '758eaee05362425590906fb4540c32ad';
const PageSize = 8;

let currentPage = 1;
let totalPages = undefined;

const searchBtnRef = document.getElementById('searchCtr'); // кнопка пошуку
const loadMoreBtnRef = document.getElementById('loadMore'); // кнопка підгрузки іще
const searchField = document.getElementById('searchNewsField'); // поле вводу запиту
const articlesContainer = document.getElementById('articles'); // контейнер для статей
const paginationContainer = document.getElementById('pagination'); // контейнер для пагінації


searchBtnRef.addEventListener('click', e => {
  
  getNews(searchField.value).then(({articles, totalResults}) => {
    calculatePagination(totalResults)
    
    const elements = createArticlesElements(articles);
    const pageElements = createPagesElements();
    
    render(paginationContainer, pageElements);
    render(articlesContainer, elements);
  });
  
});

paginationContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.className !== "page-link") return

  currentPage = e.target.dataset.page;

  getNews(searchField.value).then(({articles, totalResults}) => {
    calculatePagination(totalResults)
    
    const elements = createArticlesElements(articles);
    const pageElements = createPagesElements();
    
    render(paginationContainer, pageElements);
    render(articlesContainer, elements);
  });

})

loadMoreBtnRef.addEventListener('click', e => {
  if (currentPage > totalPages) return
  
  currentPage = Number(currentPage) + 1;
  
  getNews(searchField.value).then(({articles}) => {
    const elements = createArticlesElements(articles);
    articlesContainer.insertAdjacentHTML('beforeend', elements);
  });
})

/**
 * getNews
 * @param {String} query рядок з ключовими словами для пошуку
 * @returns {Promise} проміс, успішне відпрацювання якого повертає масив з новинами і загальну кількість новин по запиту.
 */
function getNews(query) {
  const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&apiKey=${API_KEY}&pageSize=${PageSize}&page=${currentPage}`;
  
  return axios.get(urlAPI)
  .then(res => res.data)
  .then(({articles, totalResults}) => {
    return {articles, totalResults}
  })
  .catch(error => console.log(error))
}

/**
 * createArticlesElements
 * @param {Array} articles - масив з новинами
 * @returns {String} Рядок з елементами всіх новин
 */
function createArticlesElements (articles) {
  return articles.map(({title, description, url, urlToImage}) => {
    return `<article class="news">
    <h2>${title}</h2>
    <div>${description}</div>
    <img src="${urlToImage}" alt="${title}" loading="lazy">
    <a href="${url}" class="news-link" target="_blank">more</a>
  </article>`;
  }).join('');
}

/**
 * createPagesElements
 * @returns {string} Рядок з елементами кнопок пагінації
 */
function createPagesElements () {
  let pagesElements = '';
  
  for (let i = 1; i <= totalPages; i += 1 ) {
    pagesElements += `<li class="page-item"><a class="page-link" href="#" data-page=${i}>${i}</a></li>`
  }

  return pagesElements
}

/**
 * calculatePagination. Підраховує кількість сторінок
 * @param {Number} totalResults 
 */
function calculatePagination(totalResults) {
  totalPages = Math.floor((totalResults > 100 ? 100 : totalResults) / PageSize)
}

/**
 * Очищає контейнер і вставляє туди новий контент
 * @param {HTMLElement} container 
 * @param {String} content 
 */
function render (container, content) {
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', content)
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