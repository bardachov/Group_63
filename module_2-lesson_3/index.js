/**
 * Task 1
  Створіть масив genres з елементами "Jazz" та "Blues".
  Додайте «Рок-н-рол» до кінця.
  Виведіть у консоль перший елемент масиву.
  Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
  Видаліть перший елемент та виведіть його в консоль.
  Вставте «Country» та «Reggae» на початок масиву.
 */

  /** Cтворюємо масив */
  // let genres = ['Jazz', 'Blues'];

  /** Додаємо елемент в кінець масиву */
  // genres.push('Рок-н-рол');
  
  /** виводимо перший елемент */
  // console.log("перший",genres[0])

  /** 
   * 1. Знаходимо індекс останнього елемента масива 
   * 2. Виводимо останній елемент по індексу
  */
  // const lastIndex = genres.length - 1;
  // console.log("last", genres[lastIndex]);

  /** Видаляємо перший елемент масива */
  // const firstElement = genres.shift();

  /** Виводимо видалений елемент */
  // console.log(firstElement);

  /** Вставляємо на початок масиву два елементи */
  // genres.unshift('Country','Reggae');
  // console.log(genres);

/**
 * Task 2
 * Обчислити площу прямокутника. Значення сторін зберігаються в рядку '8 11'.
*/


//  const values = '8 11';

/** розділяємо рядок по пробілу. Створюється массив з елементами ['8','11']  */
//  const sides = values.split(' ');
//  console.log(sides);

/** Перемножаємо значення масива по індексу */
//  const square = sides[0] * sides[1];
//  console.log(square)

 /**
  * Task 3
  * Для кожного елемента масиву виведи в консоль рядок у форматі 
  * номер_елемента: значення_елемента. Нумерація елементів має починатися з 1.
  * 1: яблуко
  * 2: виноград
  * 
  * Для цього в тілі циклу при виводі в консоль до індекса 'i' додаємо 1
  */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
  
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`)
// }


/**
 * Task 4
 * Вивести в консоль Імʼя - номер телефону. Маємо два рядки з іменами і тедефонами
 * 1. розбиваємо кожний рядок на масив
 * 2. в циклі по індексу звертаємося одразу до двох масивів. 
 */

 const names = 'Jacob, William, Solomon, Artemis';
 const phones = '89001234567,89001112233,890055566377,890055566300';

 /**
  * 1. Перевести рядки в масиви
  * 2. Вивести в консоль: Jacob - 89001234567; William - 89001112233
*/

// const namesArray = names.split(', ');
// console.log(namesArray);

// const phoneArrays = phones.split(',')
// console.log(phoneArrays);

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`${namesArray[i]} - ${phoneArrays[i]}`)
// }

/**
 * Task 5.
 * Вивести всі слова крім першого і останнього.
 * Має працювати для будь якого рядка.
 * 1. Розбиваємо рядок на масив по пробілу(кожне слово - окремий елемент масива)
 * 2. Методом splice - змінюємо масив видаляючи з нього всі елементи крім першого і сотаннього
 *    splice(індекс з якого починати, кількість елементів)
 * 3. slice повертає масив з видаленими елементами
 * 4. Збираємо отриманий масив в рядок 
 * 
 * Note: Для метода slice першим параметром(початком) буде елемент з індексом 1(другий елемент масива).
 * Але як визначити кількість елементів для видалення:
 *  Всього елементів в масиві "words.length". Якщо б треба було видалити все, то підійшло б.
 *  Але перший ми вже відкидуємо, тому берем "words.length - 1".
 *  Тепер, з умовою задачі, треба відкинути і останній. Тобто відняти ще одиницю.
 *  Тому вийде "words.length - 2"
 */

//  const string = 'Welcome to the future. Hello my name is Stepan';
//  const words = string.split(' ');
//  console.log(words)

//  const amountToDelete = words.length - 2;
//  const deletedWords = words.splice(1, amountToDelete );
//  console.log(deletedWords)

//  let newString = deletedWords.join(' ');
//  console.log(newString)

/**
 * Task 6. Вивести в консоль рядок задом на перед
 * 1. Розбиваємо рядок на масив посимвольно(кожен символ рядка - окремий елемент масива)
 * 2. Методом reverse, розвертаємо масив сзаду наперед([a,b,c] -> [c,b,a])
 * 3. Збираємо вже перевернутий масив в новий рядок
 */

//  const string = 'Welcome to the future';

//  const array = string.split('');
//  console.log(array);

//  array.reverse();
//  console.log(array);

//  const newString = array.join('');
//  console.log(string, '|',newString)
 
/** Варіант 2
 * проходимо циклом з кінця масиво до початку.
 * Посимвольно записуємо значення в рядок
 */
// let newStr = '';
//  for (let i = string.length - 1; i >= 0; i -= 1) {
//   console.log(i, string[i], newStr)
//   newStr += string[i];
//  }

//  console.log(newStr)

/**
 * Task 7. Відсортувати масив
 */

//  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs)
//   langs.sort()
//   console.log(langs)

/**
 * Task 8
 * Знайти найменше значення в масиві.
 * 1. Створюємо змінну в яку запишему результат
 * 2. Присвоємо її перший елемент масива
 * 3. проходимо циклом по масиву. Порівнюємо кожне значення зі значенням змінної
 * 4. Якщо елемент на поточній ітерації менше за значення змінної. Присвоюємо в змінну значення поточного елемента
 * Таким чином пройшовши по всьому масиву знайдемо найменше число
 */

 const numbers = [17, 94, 23, 37, 456, 234, 35, -58];
let minNumber = numbers[0];

for (let item of numbers) {
  if (item < minNumber) {
    minNumber = item
  }
}

console.log(minNumber)