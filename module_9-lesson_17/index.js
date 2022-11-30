// 1. Отримуємо дату до якої будемо рахувати відлік (Новий рік)
const newYearDate = new Date('2023-01-01 00:00');

// 2. створюємо константи: Одна хвилина, одна година, один день
const oneMinute = 1000 * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;

// 3. Вибираємо необхідні нам елементи з DOM
const daysRef = document.querySelector('#clock1 [data-value="days"]');
const hoursRef = document.querySelector('#clock1 [data-value="hours"]');
const minutesRef = document.querySelector('#clock1 [data-value="minutes"]');
const secondsRef = document.querySelector('#clock1 [data-value="seconds"]');

/**
 * 4. Робимо розрахунки
 */
// const todayDate = new Date(); // отрималу дату в цей момент часу
// const diff = newYearDate - todayDate; // отримали різницу між двома датами в мілісекундах (таймстемп)

// // поділивши загальну кількість мілісекунд між датами на кількість мілісекунд в одному дні. Отримали кількість днів
// const days = Math.floor(diff / oneDay); 

// // тепер взяли остачу від ділення на один день, решту поділили на кількість мілісекнд в одній годині. Отримали кількість годин
// const hours = Math.floor((diff % oneDay) / oneHour);

// // тепер взяли остачу від ділення на одну годину, решту поділили на кількість мілісекнд в одній хвилині. Отримали кількість хвилин
// const minutes = Math.floor((diff % oneHour) / oneMinute);

// // тепер взяли остачу від ділення на одну хвилину, решту поділили на 1000 мілісекнд(1 секунда). Отримали кількість секунд
// const seconds = Math.floor((diff % oneMinute) / 1000);

// 5. Записуємо отримані значення у відповідні елементи
//   daysRef.textContent = days.toString().padStart(2, '0')
//   hoursRef.textContent = hours.toString().padStart(2, '0')
//   minutesRef.textContent = minutes.toString().padStart(2, '0')
//   secondsRef.textContent = seconds.toString().padStart(2, '0')


/**
 * 6. Тепер треба зробити щоб таймер оновлювався кожну секунду
 * Для цього встановлюємо інтервал з delay=1000
 * і в колбек кладемо всі розрахунки і оновлення DOM.
 * Код в пункті 4 і 5 закоментуємо.
 */

setInterval(callback, 1000);

function callback () {
  const todayDate = new Date();
  const diff = newYearDate - todayDate;

  const days = Math.floor(diff / oneDay);
  const hours = Math.floor((diff % oneDay) / oneHour);
  const minutes = Math.floor((diff % oneHour) / oneMinute);
  const seconds = Math.floor((diff % oneMinute) / 1000);

  daysRef.textContent = days.toString().padStart(2, '0')
  hoursRef.textContent = hours.toString().padStart(2, '0')
  minutesRef.textContent = minutes.toString().padStart(2, '0')
  secondsRef.textContent = seconds.toString().padStart(2, '0')
}



/**
 * 7. Тепер перепишемо весь наш таймер на класс!
 * І створимо ще один відлік, але до іншої дати.
 * 
 * В конструктор клас буде приймати селектор таймера(батьківський елемент) і дату до якої буде відлік
 * одразу в конструкторі отримуємо елементи DOM(refs) з якими буде працювати екземпляр класу
 * 
 * Далі
 * Розділимо код на окремі логічні частини. В нас є обчислення днів, годин, хвилин, секунд.
 * Також є оновлення DOM. Зробимо в класі два окремі методи для цього
 * 
 * і останнє: мають бути методи запуску таймера і зупинки
 */


class CountdownTimer {

  constructor({ selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.refs = {
      daysRef: document.querySelector(`${this.selector} [data-value="days"]`),
      hoursRef: document.querySelector(`${this.selector} [data-value="hours"]`),
      minutesRef: document.querySelector(`${this.selector} [data-value="minutes"]`),
      secondsRef: document.querySelector(`${this.selector} [data-value="seconds"]`)
    }
  }

  getData() {
    // ті самі розрахунки які були вище
    const todayDate = new Date();
    const diff = this.targetDate - todayDate;

    const days = Math.floor(diff / oneDay);
    const hours = Math.floor((diff % oneDay) / oneHour);
    const minutes = Math.floor((diff % oneHour) / oneMinute);
    const seconds = Math.floor((diff % oneMinute) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
  
  updateContent({ days, hours, minutes, seconds}) {
    // так само оновлюється DOM як ми робили вище
    this.refs.daysRef.textContent = days.toString().padStart(2, '0')
    this.refs.hoursRef.textContent = hours.toString().padStart(2, '0')
    this.refs.minutesRef.textContent = minutes.toString().padStart(2, '0')
    this.refs.secondsRef.textContent = seconds.toString().padStart(2, '0')
  }

  startTimer() {
    // створюємо таймер і кладемо його ідентифікатор і параметр countDownId
    this.countDownId = setInterval(() => {
      const timer = this.getData(); // отримуємо обʼєкт { days, hours, minutes, seconds }
      this.updateContent(timer); // передаємо цей обʼєкт в метод оновлення DOM. Де він одразу деструкутурується.
    }, 1000)
  }

  stopTimer() {
    // зупиняємо таймер по ID
    clearInterval(this.countDownId)
  }
}

/**
 * вішаємо лістенер кліка на кнопку і зупиняємо таймер.
 * Кнопка працює тільки з одним таймером.
 * 
 * Спробуйте переробити код, щоб у кожного таймера була своя кнопка стоп
 */
const stopBtn = document.getElementById('stopCountdown');
stopBtn.addEventListener('click', e => {
  timerNY24.stopTimer()
})


// Створюємо екземпляр класу
const timerNY24 = new CountdownTimer({
  selector: "#clock2",
  targetDate: new Date("January, 01 2024 00:00:00"),
});

// Запускаємо таймер
timerNY24.startTimer();


// Створюємо ще один таймер
const timerNY25 = new CountdownTimer({
  selector: "#clock3",
  targetDate: new Date("January, 01 2025 00:00:00"),
});

timerNY25.startTimer();





/** Розбір питань */

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => {console.log(i)}, delay)
// }

// setTimeout(() => {console.log(3)}, 3000)
// setTimeout(() => {console.log(2)}, 2000)
// setTimeout(() => {console.log(1)}, 1000)

// const date = new Date();
// const yesterday = new Date();
// yesterday.setMonth(9);
// console.log(date - yesterday)

// console.log(Date.now())
// console.log(date.getMonth())

// const today = new Date();

// today.getMonth();
// today.setMonth(10);

// today.getFullYear();
// today.setFullYear(2013);