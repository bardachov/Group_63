/**
 * Task 1.
 * Напиши скрипт, який для об'єкта `user`, послідовно:
 * - додає поле `mood` зі значенням `'happy'`
 * - замінює значення `hobby` на `'skydiving'`
 * - замінює значення `premium` на `false`
 * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
 */

const abc = 'greeting';

 const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// 1) Отримати масив ключів обʼєкта
const userKeys = Object.keys(user);

// 2) пройтись масивом по ключах і вивести в консоль рядки 
// `ключ:значення`

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`)
}


/** 
 * Task 2.
 * У нас є об'єкт, де зберігаються зарплати нашої команди. 
 * Напишіть код для підсумовування всіх зарплат і збережіть 
 * результат у змінній sum. Повинно
 * вийти 390. Якщо об'єкт `salaries` порожній, 
 * то результат має бути 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesValues = Object.values(salaries);
let salarySum = 0;

for (const value of salariesValues) {
  salarySum += value  
}

console.log(salarySum)


/** Example 3
 * Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
 * об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
 * каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
  
  let result;

  for (const stone of stones) {
    if (stone.name === stoneName) {
      result = stone.price * stone.quantity
    }
  }

  return result
}

let total = calcTotalPrice(stones, 'Діамант');
let total2 = calcTotalPrice(stones, 'Сапфір');
console.log(total, total2)

/** Example 4 - Комплексні завдання
 * Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
 * в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Types = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 100,
  wallets: {
    type: 'own',
    balance: 300,
    owner: 'Me',
    colesd: true
  },
  // Історія транзакцій
  transactions: [],

  array: ['HTML', 'JS'],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length
    }
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    amount = Math.abs(amount);

    this.balance += amount;
    const newTransaction = this.createTransaction(amount, Types.DEPOSIT);
    
    this.transactions.push(newTransaction)
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    amount = Math.abs(amount);

    const newTransaction = this.createTransaction(amount, Types.WITHDRAW);

    if (amount > this.balance) {
      console.log('Нема грошей!');
      return 
    }

    this.balance -= amount;
    this.transactions.push(newTransaction)
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;
    
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        result += transaction.amount
      }
    }

    return result;
  },

  checkKey(key) {
    return this.hasOwnProperty(key)
  }
};

const keys = Object.keys(account.wallets);
console.log(keys)

account.deposit(-45000);
account.deposit(57);
account.deposit(1);
account.deposit(678);

account.withdraw(-20000);
account.deposit(17000);
account.withdraw(40000);


const currentBalance = account.getBalance();
console.log(currentBalance);
console.log(account.balance);

const budgetWhole = account.getTransactionDetails(4);
console.log(budgetWhole);


const totalWithdraws = account.getTransactionTotal(Types.WITHDRAW);
const totalDeposits = account.getTransactionTotal(Types.DEPOSIT);
console.log(totalWithdraws)
console.log(totalDeposits)

console.log(account.hasOwnProperty('wallets'))
console.log(account.checkKey('walletsasd'))

console.log(account.transactions[1])

account.transactions[1].amount = 570
console.log(account.transactions[1])




// Функція пошуку найдовшого слова в рядку. 
function findLongestWord(string) {
  
  // 1. split розбиває рядок по пробілу на масив слів
  // 2. в тілі колбека reduce порівнюємо поточний елемент масива з результатом поверненим на попередній ітерації
  const wordsArr = string.split(' ');
  const longest = wordsArr.reduce(function(prev, item) {
    if (prev.length > item.length) {
      return prev
    }
    return item
  });

  return longest

  // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
}

let res = findLongestWord('Hello my name is longestone');

debugger