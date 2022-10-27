/**
 * Task 1 - Індекс маси тіла.
 * Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
 * індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на
 * квадрат висоти людини в метрах.
 * 
 * Індекс маси тіла необхідно округлити до однієї цифри після коми
 */

// 1) Запитати ввести вагу і зріс - prompt
// 2) створити пусту функцію розрахунку індексу маси - function
// 3) задати функції параметри ваги і зросту - (weight, height)
// 4) розрахувати індекс маси. - Math.pow()
// 5) повернути результат - return
// 6) округлити результат до одніє цифри після коми toFixed(1) 

const weight = prompt('Введіть вашу вагу в кг');
const height = prompt('Введіть ваш зріст в метрах');

const calcBMI = function(weightU, heightU) {
  const heightPow = Math.pow(heightU, 2);
  const result = weightU / heightPow;

  return result.toFixed(1)
}

/** 
 * Створили окрему функцію яка на основі порахованого індекса маси тіла, 
 * виводе в консоль, є надмірна вага чи нема
 * */
const validateBMI = function (bmi) {
  if (bmi <= 18.5) {
    console.log('недостатня маса')
  } else if (bmi <= 24.9) {
    console.log('норма')
  } else {
    console.log('надлишкова маса')
  }
}


const result = calcBMI(weight, height);
console.log(result);

validateBMI(result)


// console.log(calcBMI(80, 1.75))
// console.log(calcBMI(70, 1.85))
// console.log(calcBMI(100, 1.55))
// console.log(calcBMI(90, 1.8))


/**
 * Task 9 - Колекція курсів.
 * Напишіть функції для роботи з колекцією навчальних курсів `courses`:
 * ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
 * 
 * - `addCourse(name)` - додає курс до кінця колекції
 * - `removeCourse(name)` - видаляє курс з колекції
 * - `updateCourse(oldName, newName)` - змінює ім'я на нове
 */

// 1) Додаємо курс до колекції `addCourse`
//   1.1 створити функцію додавання курсу - function
//   1.2 оголосити параметр функції, який прийматиме значення аргумента для додавання
//   1.3 додамо курс до колекції - push
//   1.4 Повернемо оновлену колекцію - return

// 2) Видалити курс із колекції `removeCourse`
//   2.1 створити функцію видалення курсу
//   2.2 оголосити параметр функції, який прийматеме значення аргумента для видалення 
//   2.3 Перевірити чи є курс у колекції - indexOf
//   2.4 Якщо є, видаляємо - splice
//   2.5 Повертаємо із функції елемент який був видалений

// 3) Оновлення курса `updateCourse`
//   1. Створюємо функцію оновлення курсу, старе імʼя замінюємо новим
//   2. Даємо два параметра: старе імя, нове імя(oldName, newName)
//   3. Перевірити чи є курс у колекції - indexOf
//   4. Якщо є, записуємо нове значення по індексу

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

/** Щоб додати інтерактивности, запитуємо користувача ввести дані - prompt */
const courseName = prompt('Введіть назву курсу');
const newName = prompt('Введіть нове імʼя');

const addCourse = function(newCourse) {

  if (courses.includes(newCourse)) {
    console.log('Такий курс вже є');
    return // ранній вихід із функції
  }

  courses.push(newCourse);
  return courses; // Памʼятайте, що змінна courses це посилання на масив!
}

const removeCourse = function (courseName) {
  
  const index = courses.indexOf(courseName);
  
  if (index === -1) {
    console.log('такого курсу нема')
    return
  }
  
  const deletedCourses = courses.splice(index, 1);
  return deletedCourses
}

const updateCourse = function (oldName, newName) {
  const index = courses.indexOf(oldName);
  
  if (index === -1) {
    console.log('такого курсу нема')
    return
  }

  courses[index] = newName
}


/** checkCourseName - функція в яку ми винесли перевірку елемнту в масиві. */
const checkCourseName = function (value) {
  const index = courses.indexOf(value);

  if (index === -1) {
    console.log('такого курсу нема')
    return false
  } else {
    console.log('Такий курс вже є');
    return true
  }
}


/** Дублюю ті самі функції, але тепер з викристанням винесеної перевірки в окрему функцію */
// const addCourse = function(newCourse) {

//   if (checkCourseName(newCourse)) return

//   courses.push(newCourse);
//   return courses;
// }

// const removeCourse = function (courseName) {
  
//   if (!checkCourseName(courseName)) return
  
//   const deletedCourses = courses.splice(index, 1);
//   return deletedCourses
// }

// const updateCourse = function (oldName, newName) {
//   if (!checkCourseName(oldName)) return
//   courses[index] = newName
// }