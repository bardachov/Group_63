
/**
 * Task 1.
 * Написати функцію котра буде повертати масив моделей авто
 * 
 * 1. Визначити метод
 * 2. перебрати масив з авто
 * 2. Зібрати масив з моделями авто
 */

 const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

const getModels = cars => {}

const allModels = getModels(cars);
console.table(allModels);

/**
 * Task 2. 
 * Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінени 
 * значенням властивості `price` залежно від переданої знижки.
 * 
 * 1. Перебрати масив з авто
 * 2. Повернути новий масив з оновленою ціною залежно від скидки
*/

const makeCarsWithDiscount = (cars, discount) => {};

const carsDiscount = makeCarsWithDiscount(cars, 0.2);
console.log(carsDiscount)

 /**
  * Task 3.
  * Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша 
  * ніж значення параметра `threshold`.
*/

const filterByPrice = (cars, threshold) => {};

const filteredByPrice = filterByPrice(cars, 30000);
console.table(filteredByPrice);

/**
 * Task 4.
 * Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість onSale яких true.
*/

const getCarsWithDiscount = cars => {};

const filteredBySale = getCarsWithDiscount(cars);
console.table(filteredBySale);

/** 
 * Task 5
 * Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
 * збігається зі значенням параметра `type`.
*/

const getCarsWithType = (cars, type) => {};

const filteredByType = getCarsWithType(cars, 'suv');
console.table(filteredByType);


/**
 * Task 6.
 * нехай ф-я getCarByModel повертає одне авто за моделю
*/

const getCarByModel = (cars, model) => {};

const foundCarByModel = getCarByModel(cars, 'F-150');
console.log(foundCarByModel);

/**
 * Task 7.
 * Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
 * зростанням значення якості `amount`.
*/

const sortByAscendingAmount = cars => {};

const sortedByAmountCars = sortByAscendingAmount(cars);
console.table(sortedByAmountCars);

/**
 * Task 8.
 * Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів 
 * відсортований за зменшенням значення властивості `price`.
*/

const sortByDescendingPrice = cars => {};

const sortedByPrice = sortByDescendingPrice(cars);
console.table(sortedByPrice);

/**
 * Task 9.
 * Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
 * за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
 * значення параметра `order`.
*/

const sortByModel = (cars, order) => {};

sortByModel(cars, 'asc');
sortByModel(cars, 'desc');

/**
 * Task 10.
 * 
 * Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
 * властивостей `amount`).
*/

const getTotalAmount = cars => {};

getTotalAmount(cars)

/**
 * Task 11.
 * Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
 * тільки тих, які зараз на розпродажі.
*/

const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));

/**
 * Task 12.
 * Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
 * (Властивість onSale), відсортованих за зростанням ціни.
*/

const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));