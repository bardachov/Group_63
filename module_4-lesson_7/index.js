/**
 * Напишіть наступні функції:
 * `createProduct(obj, callback)` - приймає об'єкт товару без id, а також коллбек. 
 * Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість `id` та викликає коллбек 
 * передаючи йому створений об'єкт.
 * 
 * `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в консоль
 * `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
 */

 const product = {
  name: "chocolate",
  price: 34,
  quantity: 5
}

const createProduct = (obj, callback) => {
  // створили новий обʼєкт товару, оператором спред забралм всі властивости із параметра obj
  const product = {
    ...obj,
    id: 1
  };

  // викликали функцію callback яку передають в параметрах. Передали їй новий обʼєкт як аргумент
  // Повернули результат виконання колбека
  return callback(product)
};

// Створили просто окрему функцію, яка приймає один параметр(будь-що) і виводить його в консоль. 
const logger = (val) => {
  console.log(val)
}

// Створили ще одну окрему функцію якак приймає параметром обʼєкт(товар) і рахує вартість.
const calculateTotalPrice = ({price, quantity}) => {
  const total = price * quantity;
  return total
}

/**
 * коротша форма запису:
 * const logger = val => console.log(val)
 * const calculateTotalPrice = ({price, quantity}) => price * quantity
 */

//викликали createProduct. Передали два аргументи: обʼєкт товара і будь-яку функцію колбек
createProduct(product, logger); // колбеком буде функція looger
const totalPrice = createProduct(product, calculateTotalPrice); // колбеком буде функція calculateTotalPrice
console.log(totalPrice)


/**
 * Task 2
 * Додайте в об'єкт `account` методи `withdraw (amount, onSuccess, onError)` та 
 * `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а другий та третій - коллбеки.
 * 
 * Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
 * Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 40000,
  
  withdraw (amount, onSuccess, onError) {
    if(amount > this.balance) {
      return onError(amount, 'Недостатньо балансу')
    }
    
    if(amount > TRANSACTION_LIMIT) {
      return onError(amount, 'перевищенно ліміт операцій')
    }

    onSuccess(amount);
  },

  deposit (amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      return onError(amount)
    }

    onSuccess(amount);
  },
};

const handleSuccess = (amount) => {
  console.log(`${amount} успішно опрацьовано!`)
}

const handleError = (amount, message = 'Невідомо') => {
  console.log(`${amount} Не опрацьовано! По причині: ${message}`)
}
 
 account.withdraw(2000, handleSuccess, handleError);
 account.withdraw(600, handleSuccess, handleError);
 account.withdraw(300, handleSuccess, handleError);
 account.deposit(1700, handleSuccess, handleError);
 account.deposit(0, handleSuccess, handleError);
 account.deposit(-600, handleSuccess, handleError);
 account.deposit(600, handleSuccess, handleError);



/**
 * Task 3
 * Напишіть функцію `each(array, callback)`, яка першим параметром очікує 
 * масив, а другим - функцію, яка застосовується до кожного елемента масиву. 
 * Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.
 */

// коллекція співробітників, де кожен елемент це обʼєкт з іменем і сумою бонусів
const employees = [
  {
    name: 'Artur',
    bonus: 64.5
  },
  {
    name: 'Ivan',
    bonus: 49.2
  },
  {
    name: 'Makar',
    bonus: 36
  },
  {
    name: 'Anastasiya',
    bonus: 25
  },
  {
    name: 'Olha',
    bonus: 165.13
  },
]

// створили функцію each, яка чекає масив і функцію в параметрах
const each = (arr, callback) => {
  const resultArr = []; // новий масав який будемо повертати

  /** 
   * перебираємо циклом масив, диструктурувавши елемент на кожній ітерації
   * запис еквівалентний цьому:
      for (const item of arr) {
        resultArr.push({
          name: item.name,
          bonus: callback(item.bonus)
        })
      }
  */
  for (const {name, bonus} of arr) {
    // на кожній ітерації викликаємо колбек для бонусу і кладемо новий обʼєкт в новий масив
    resultArr.push({
      name,
      bonus: callback(bonus)
    })
  }

  return resultArr; // повертаємо новий масив
}

const roundBonus = value => Math.floor(value) // те саме, що

// 1. const roundBonus = (value) => {
//   return Math.floor(value)
// }

// 2. function roundBonus (value) {
//   return Math.floor(value)
// }

// 3. const roundBonus = function (value) {
//   return Math.floor(value)
// }

// викликали each, передали їй масив з даними і функцію як колбек. Очікуємо отримати новий масив в результат
const roundedBonuses = each(employees, roundBonus);
console.log(roundedBonuses);


/**
 * Task 4
 * Переписати функції на arrow functions
 */

// origin. P.S. Це задача з першого завдання ;)
function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

// arrorw. 1
const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

// arrorw. 2
const createProduct = (partialProduct, callback) => callback({ id: Date.now(), ...partialProduct });



// origin
function logProduct(product) {
  console.log(product);
}

// arrow
const logProduct = product => console.log(product)



// origin 
function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

//arrow 1
const logTotalPrice = product => console.log(product.price * product.quantity);

// arrow 2
const logTotalPrice = ({price, quantity}) => console.log(price * quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/**
 * Task 5 & 6 ми зробили одразу. Треба перевести функції з завдань 2 & 3 на arrow functions
 */


/** 
 * Task 7
 * Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
 **/
function logItems(items) {
  console.log(items);
  
  // звичайний цикл for
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  // метод масива forEach. Повна форма запису
  items.forEach(function(item, index) {
    console.log(`${index + 1} - ${item}`);
  });

  // метод forEach. Коротка форма за допомогою arrow function
  items.forEach((item, index) => console.log(`${index + 1} - ${item}`))
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


/** 
 * Task 8
 * Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
 * Те саме: цикл for замінили на forEach
 **/

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  nameList.forEach((name, currentIndex) => {
    console.log(`${name}: ${phoneList[currentIndex]}`);
  });

}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});


/** 
 * Task 9
 * Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
 **/

const calсulateAverage = (...args) => {
  let total = 0;

  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  // ці два forEach еквівалентні
  args.forEach(number => total += number);
  
  // args.forEach(function(el) {
  //   total = total + el
  // });
  
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


/** Питання №1 від Вови */ /**Відповідь return має бути після виконання циклу. */
// під час виконання автоперевірки попадаю на неправильно поставленний return чому правильно:
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    
    for (let pizza of pizzaPalace.pizzas) {
      if (pizza === pizzaName){
        return makePizza(pizzaName)
      } 
    }
    
    return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};  

// а не : 
const pizzaPalace2 = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of pizzaPalace.pizzas) {
      
      if (pizza === pizzaName){
        return makePizza(pizzaName)
      } 
      
      return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
    }
  },
};

