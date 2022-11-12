
/**
 * Task 1.
 * Написати функцію котра буде повертати масив моделей авто
 * 
 * 1. Визначити метод
 * 2. перебрати масив з авто
 * 2. Зібрати масив з моделями автою.
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

// const getModels = cars => cars.map(car => car.model) // short form

// full form
const getModels = cars => {

  const models = cars.map((element, index, array) => {
    
    console.log(element)
    console.log(index)
    console.log(array)

    // в array зберігається масив до якого застосували метод. Можно до ноьго звернутися по індексу!
    // array[index]
    
    return element.model
  })

  return models
}



const allModels = getModels(cars);
// console.table(allModels);

/**
 * Task 2. 
 * Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінени 
 * значенням властивості `price` залежно від переданої знижки.
 * 
 * 1. Перебрати масив з авто
 * 2. Повернути новий масив з оновленою ціною залежно від скидки
*/

// Short form
// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({
//   ...car,
//   price: car.price - (car.price * discount) 
// }))

// full form
const makeCarsWithDiscount = (cars, discount) => {
  const carsWithDiscount = cars.map(car => {
    return {
      ...car,
      price: car.price - (car.price * discount) 
    }
  });

  return carsWithDiscount
};

const carsDiscount = makeCarsWithDiscount(cars, 0.2);
// console.table(carsDiscount)

 /**
  * Task 3.
  * Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша 
  * ніж значення параметра `threshold`.
*/

//short form
// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold)

// full form
const filterByPrice = (cars, threshold) => {
  
  const filteredCars = cars.filter((car) => {
    
    if (car.price < threshold) {
      return true
    }

    return false
  });

  return filteredCars
};



const filteredByPrice = filterByPrice(cars, 30000);
// console.table(filteredByPrice);

/**
 * Task 4.
 * Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість onSale яких true.
*/

// same task as previous one, just filter on other property
const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

const filteredBySale = getCarsWithDiscount(cars);
// console.table(filteredBySale);

/** 
 * Task 5
 * Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
 * збігається зі значенням параметра `type`.
*/


// short form
// const getCarsWithType = (cars, type) => cars.filter(({type: carType}) => carType === type);

// full form
const getCarsWithType = (cars, type) => {

  const filteredCars = cars.filter(car => {
    if (car.type === type) {
      return true
    }
  })

  return filteredCars
}

const filteredByType = getCarsWithType(cars, 'suv');
// console.table(filteredByType);


/**
 * Task 6.
 * нехай ф-я getCarByModel повертає одне авто за моделю
*/

// short form
// const getCarByModel = (cars, model => cars.find(({model: carModel}) => carModel === model))

// full form
const getCarByModel = (cars, model) => {

  const foundCar = cars.find(car => {
    if(car.model === model) {
      return true
    }
  })

  return foundCar
};

const foundCarByModel = getCarByModel(cars, 'F-150');
// console.log(foundCarByModel);

/**
 * Task 7.
 * Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
 * зростанням значення якості `amount`.
*/

//short form
// const sortByAscendingAmount = cars => [...cars].sort((a,b) => b.amount - a.amount)

// full form
const sortByAscendingAmount = cars => {

  const sortedCars = [...cars];

  sortedCars.sort((a, b) => {
    if (a.amount > b.amount) return 1;

    return -1
  });

  return sortedCars

};


const sortedByAmountCars = sortByAscendingAmount(cars);
// console.table(sortedByAmountCars);

/**
 * Task 8.
 * Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів 
 * відсортований за зменшенням значення властивості `price`.
*/
// Same task as previous one, just sort by price form bigger to smaller
const sortByDescendingPrice = cars => [...cars].sort((a ,b) => b.price - a.price );

const sortedByPrice = sortByDescendingPrice(cars);
// console.table(sortedByPrice);

/**
 * Task 9.
 * Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
 * за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
 * значення параметра `order`.
*/

/**
 * 
 * 1. в середині функції робимо копію масиву і будемо сортувати його
 * 2. Робимо розгалуження if, перевіряємо значення order
 * 3. Застосовуємо метод sort, але з різною умовою сортування в залежностиі від значення order
 */

const sortByModel = (cars, order) => {
  const sortedCars = [...cars];

  // Short form of sort
  if (order === 'asc') {
    sortedCars.sort((a, b) => a.model > b.model ? 1 : -1)
  } else if(order === 'desc') {
    sortedCars.sort((a, b) => a.model < b.model ? 1 : -1)
  }
  
  // OR full form of sort
  
  if (order === 'asc') {
    sortedCars.sort((a, b) => {
      if (a.model > b.model) {
        return 1
      }
      
      return -1
    })
  } else if (order === 'desc') {
    sortedCars.sort((a, b) => {
      if (a.model < b.model) {
        return 1
      }

      return -1
    })
  }

  return sortedCars
  
};

const cars1 = sortByModel(cars, 'asc');
const cars2 = sortByModel(cars, 'desc');

// console.log(cars1)
// console.log(cars2)

/**
 * Task 10.
 * 
 * Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
 * властивостей `amount`).
*/

// short form
// const getTotalAmount = cars => cars.reduce((total, car) => total += car.amount, 0)

// full form
const getTotalAmount = cars => {

  const total = cars.reduce((total, car) => {
    
    total += car.amount
    return total

  }, 0)

  return total
};



// console.log('Total',getTotalAmount(cars))

/**
 * Task 11.
 * Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
 * тільки тих, які зараз на розпродажі.
*/

/**
 *  1. спочатку треба отпримати відфільтровний масив, де тільки ті машини котрі на розпродажу
 *  2. Потім методом map, створити з фітфльтрованого масива автомобілів новий масив, де тільки назви моделей будуть
 */

// sort form
// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// full form
const getModelsOnSale = (cars) => {
  const carsOnSale = cars.filter( car => {
    return car.onSale
  })

  const carModels = carsOnSale.map(car => {
    return car.model
  });

  return carModels
}

// console.table(getModelsOnSale(cars));

/**
 * Task 12.
 * Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
 * (Властивість onSale), відсортованих за зростанням ціни.
*/

/**
 * 
 * 1. Фільтруємо автомобілі по параметру sale(filter повертає новий масив)
 * 2. Сортуємо масив який отримали, по зростанню ціні
 */

// short form
// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price)

// full form
const getSortedCarsOnSale = cars => {

  const carsOnSale = cars.filter( car => {
    return car.onSale
  })

  return carsOnSale.sort((a, b) => a.price - b.price) // sort зміннює масив. НЕ створює новий

}

// console.table(getSortedCarsOnSale(cars));




const sortCarsByProp = (cars, prop) => {

  let countCalls = 0;

  // функція sortCars замкнена в контексті функції sortCarsByProp. 
  // Вона завжди має доступ до параметрів і локальних змінних 
  const sortCars = (param) => {
    cars.sort((a,b) => a[prop] - b[prop]);
    countCalls++;
    console.log(countCalls)
  }

  return sortCars
}

const sortSomething = sortCarsByProp(cars, 'price');

sortSomething(param)
sortSomething()
sortSomething()
sortSomething()





const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
// console.log(tags)

const getTagStats = (acc, tag) => {
  
  const hasProp = acc.hasOwnProperty(tag);

  if (hasProp) {
    acc[tag] += 1;

  } else {
    acc[tag] = 0;
  }

  

  return acc;
};

const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
// console.log(tagCount);


const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);