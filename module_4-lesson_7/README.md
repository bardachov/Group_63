# Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

## Example 1 - Коллбек функції

Напишіть наступні функції:

- `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
  коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
  властивість `id` та викликає коллбек передаючи йому створений об'єкт.
- `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
  консоль
- `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну 
  вартість товару в консоль

```js
// your code here

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
```

## Example 2 - Коллбек функції

Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
`deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
другий та третій - коллбеки.

Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
this.balance, і onSuccess в іншому випадку.

Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
або дорівнює нулю, і onSuccess в іншому випадку.

```js
// Рішення
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    
  },
  deposit(amount, onSuccess, onError) {
    
  },
};

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 3 - Коллбек функції

Напишіть функцію `each(array, callback)`, яка першим параметром очікує
масив, а другим - функцію, яка застосовується до кожного елемента масиву.
Функція each повинна повернути новий масив, елементами якого будуть результати
виклику коллбека.

```js

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
```

## Example 4 - Стрілочні функції

Виконайте рефакторинг коду за допомогою стрілочних функцій.

```js
function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
```

## Example 5 - Стрілочні функції
Виконайте рефакторинг коду задачи EXAMPLE 2 за допомогою стрілочних функцій.

## Example 6 - Інлайн стрілочні функції
Виконайте рефакторинг коду за задачи EXAMPLE 3 за допомогою стрілочних функцій.

## Example 7 - Метод forEach

Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

```js
function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Example 8 - Метод forEach

Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

```js
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
```

## Example 9 - Метод forEach

Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

```js
function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
```