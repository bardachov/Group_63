const pageSize = 12;
const refs = {
  articles: document.getElementById('articles'),
  scrollUpBtn: document.getElementById('scrollUp')
}

let currentPage = 1;
let isEverythingLoaded = false;
let totalPages = 100 / pageSize;

const fetchNews = async () => {
  const urlAPI = `http://localhost:3000/articles?_page=${currentPage}&_limit=${pageSize}`;
  
  // const response = await fetch(urlAPI);
  // return await response.json()

  const {data} = await axios.get(urlAPI);
  return data
}

const createArticlesElements = articles => {
  
  return articles.map(({title, description, url, urlToImage}) => {
    return `<article class="news">
    <h2>${title}</h2>
    <div>${description}</div>
    <img src="${urlToImage}" alt="${title}" loading="lazy">
    <a href="${url}" class="news-link" target="_blank">more</a>
  </article>`;
  }).join('')

}

/** Listeners */
window.addEventListener('load', async e => {
  const articles = await fetchNews();
  const elements = createArticlesElements(articles);
  
  refs.articles.innerHTML = '';
  refs.articles.insertAdjacentHTML('beforeend', elements)
})



const throttled = _.throttle(async () => {
  
  if (isEverythingLoaded) return;

  const body = document.body, html = document.documentElement;
  const totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  const pixelsToBottom = totalHeight - window.innerHeight - window.scrollY;
  
  if (pixelsToBottom < 450) {
    currentPage += 1;
    isEverythingLoaded = currentPage >= totalPages
    
    const articles = await fetchNews();
    const elements = createArticlesElements(articles);

    refs.articles.insertAdjacentHTML('beforeend', elements)
  }
}, 500)

window.addEventListener('scroll', throttled )



refs.scrollUpBtn.addEventListener('click', e => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
})


// const arcticlesById = document.getElementById('articles');
// const arcticlesQuery = document.querySelector('#articles-query');

// console.log(arcticlesById)
// console.log(arcticlesQuery)




/** This */
const object = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  },
  // logMessage() {
  //   console.log(this.message);
  // }
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// logMessage.call(object)
const binded = logMessage.bind(object);
binded()

// console.log(object.getMessage());



function Pet(name) {
  this.name = name;
  this.getName = () => {
    return this.name
  }
}

const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged?

const { getName } = cat;
// console.log(getName()); 

// object.logMessage();
// setTimeout(object.logMessage, 1000);





const object1 = {
  who: 'World',
  
  // greet: function () {
  //   return `Hello, ${this.who}!`;
  // },
  
  greet() {
    return `Hello, ${this.who}!`;
  },
  
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};
console.log(object1.greet());    // What is logged?
// console.log(object1.farewell());





class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  set surname(value) {
    this._surname = value
  }

  get surname() {
    return "It is private"
  }

  getCreditCard () {

  }

  pay () {
    this.getCreditCard()
  }

  static printName() {
    console.log(`My name is ${this.name}`)
  }
}

const petro = new User('Petro', 'Ivanov');
petro.pay()
petro.getCreditCard()

// User.printName()

console.log(petro.surname)





/** Замикання */

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    // console.log(i);
  }, 0);
}


function createIncrement() {
  let count = 0;
  
  function increment() { 
    count++;
  }
  
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  
  return {increment, log};
}

// const {increment} = createIncrement();
// const {log} = createIncrement();

// increment(); 
// increment(); 
// increment(); 
// log();



function createStack() {
  const items = [];
  
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    getItems() {
      return items
    }
  };
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); // => 5

let data = stack.getItems()
console.log(stack.items, data); // => [10]

data = [1,2,3]
console.log(data)

const data1 = stack.getItems()
console.log(data1); // => [10]

// stack.items = [10, 100, 1000]; // Encapsulation broken!



console.log('start');

const promise1 = new Promise((resolve, reject) => {
  resolve("Hello")
})

promise1
.then(res => {
  return res+'. I am'
})
.then(res => {
  return res + ' the best';
})
.then(res => {
  console.log(res);
})

