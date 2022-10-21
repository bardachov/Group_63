/*
  ## Example 1 - Математические операторы
  Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
*/

const apples = 47;
const grapes = 135;

const total = apples + grapes;
console.log(total)

const diff = apples - grapes;
console.log(diff)


/* 
  ## Example 2 - Комбинированные операторы
  Замени выражение переопределения комбинированным оператором `+=`.
*/

let students = 100;
students += 50;
console.log(students);

/*
  ## Example 3 - Приоритет операторов
  Разбери приоритет операторов в инструкции присвоения значения переменной `result`.
*/

const result = 108 + 223 - 2 * 5;
// 1. Множення 2 * 5 = 10
// 2. Додавання 108 + 223 = 331
// 3. Віднімання 331 - 10 = 321
console.log(result);


/*
  ## Example 4 - Класс Math
  Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
  переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
  `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.
*/

const value = 27.5;

const roundedDown = Math.floor(value); // Math.floor - округляє до цілого "вниз".
console.log("roundedDown =", roundedDown); // лінка на документацію https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

const roundedUp = Math.ceil(value); // Math.ceil - округляє до цілого "вверх"
console.log("roundedUp = ", roundedUp)  // лінка на документацію https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

const rounded = Math.round(value); // Math.round - округляє по законам математики
console.log("rounded = ", rounded); // лінка на доку https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

/*
  ## Example 5 - Шаблонные строки

  Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
  переменные вставленные в строку.
*/

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message);  // лінка на доку https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// "Cyberdyne Systems has 200 bots in stock"



/* 
  ## Example 6 - Методы строк и чейнинг
  Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
  необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

  Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
  виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
  `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
  запятая.

  Индекс массиы тела необходимо округлить до одной цифры после запятой;
*/

/* 
  Дано: вага і зріст типу String.
  Задача: Знайти індекс маси тіла, поділивши вагу на квадрат зросту.
*/
let weight = '88.3';
let height = '1.75';

// 1. Приводимо значення до числовго типу
height = Number.parseFloat(height);
weight = Number.parseFloat(weight);

// 2. Отримуємо квадрат зросту
let heightPow = height * height;

// 3. Ділимо вагу на квадрат зросту
const bmi = weight / heightPow;

// 4. Округляємо до десятих
const roundedBMI = bmi.toFixed(2)
console.log(roundedBMI);


/*
  ## Example 7 - Операторы сравнения и приведение типов
  Каким будет результат выражений?
*/

console.log(5 > 4); // true
console.log(10 >= '7'); // true. тип String приводиться до типу Number
console.log('2' > '12'); // true. String порівнюються посимвольно по коду символа. Як отримати код символа https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
console.log('2' < '12'); // false
console.log('4' == 4); // true
console.log('6' === 6); // false. Строга рівність, типи не приводяться
console.log('false' === false); // false
console.log(1 == true);  // true. 1 тип Nuber приводиться до Boolean(true)
console.log(1 === true); // false. Строга рівність, типи не приводяться
console.log('0' == false); //true. '0' спочатку приводиться до Number. Потім 0 приводиться до Boolean, false.  
console.log('0' === false); // false. Строга рівність, типи не приводяться
console.log('Papaya' < 'papaya'); // true. String порівнюються посимвольно по коду символа
console.log('Papaya' === 'papaya'); // false. String порівнюються посимвольно по коду символа
console.log(undefined == null); // true. undefined і null приводяться до false
console.log(undefined === null); // false. Строга рівність, типи не приводяться

/* 
  ## Example 8 - Логические операторы
  Каким будет результат выражений?
*/

// && - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть false. Або останній, якщо false нема
// || - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть true. Або останній, якщо true нема
console.log(true && 3); // 3
console.log(false && 3); // false
console.log(1 && null && 2); // null
console.log(true && 0 && 'kiwi'); // 0
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false
/**
 * 1. Виконується оператор в дужках (1 && null && 2) = null
 * 2. Виконуються порівняння null > 0. Ось тут гарно описано цей приклад https://learn.javascript.ru/comparison#strannyy-rezultat-sravneniya-null-i-0
 */

console.log(2 && 3); // 3
console.log(null || (2 && 3) || 4); // 3
/**
 * 1. Виконується оператор в дужках (2 && 3) = 3
 * 2. Виконується опеартор null || 3 || 4 = 3
 */


/*
  ## Example 9 - Значение по умолчанию и оператор нулевого слияния
  Отрефактори код так, чтобы в переменную `coalesingValue` присваивалось значение
  переменной `incomingValue`, если оно не равно `undefined` или `null`. В
  противном случае должно присваиваться значение `defaultValue`. Проверь работу
  скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
  false. Используй оператор `??` (nullish coalescing operator).
*/

/**
 * Оператор `??` працює схожим чином на &&. Але повертаю лівий опернд тільки коди він або null, або undefined.
 * в усіх інших випадках повертається лівий операнд. 
 */

const incomingValue = 5;
const defaultValue = 10;

const coalesingValue = incomingValue ?? defaultValue;
console.log("coalesingValue = ",coalesingValue);
/**
 * Тому при значенні incomingValue null, або undefined. coalesingValue буде присвоєно null, або undefined.
 * В усіх інших випадках буде присвоєно defaultValue
 */



/** 
 * ## Example 10 - Опертор % и методы строк
 * Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
 * строку в формате часов и минут `HH:MM`.
 * - 70 покажет 01:10
 * - 450 покажет 07:30
 * - 1441 покажет 24:01
 * */ 


const totalMinutes = 70; // Загальна кількісит хвилин

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
/**
 * 1. totalMinutes / 60 Отримуємо кількість годин
 * 2. Math.floor отримуємо цілу частину годин, яка записується в hours
 * 3. totalMinutes % 60, отримуємо остачу від ділення(кількість хвилин)
 */


/**
 * padStart доповнює дану строчку іншою строчкой до досягнення заданої довжини  
 * String(hours).padStart(2, 0);, де hours - дана строчка, 2 - довжина до якої доповнити, 0 - строка якою доповнювати
 * Тобто, hours = 1, String(hours).padStart(2, 0) = '01';
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */

/** Форматуємо години і хвилини до 2-х символьної строки */
const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

/** Форматуємо за допомогою шаблонного рядка */
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);