/** 
 * 1. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
 * незалежних аргументів.
 */

 function calcBMI({weight, height}) {
  
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);

/**
 * 2. 
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
 * незалежних аргументів.
 */

 function printContactsInfo({names, phones}) {
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

/**
 * 3. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.
 */

function getBotReport(object) {
  
  console.log(object)

  const {companyName, bots} = object
  console.log(companyName);
  console.log(bots);

  const {
    repair: repairBots = 56, 
    defence: defenceBots = 45
  } = bots;

  console.log(repairBots)
  console.log(defenceBots)


  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const company = {
  companyName: 'Cyberdyne Systems',
  bots: {
    repair: 150,
    defence: 50,
  },
}

getBotReport(company)



/**
 * 4. 
 * Напиши функцію так, щоб вона приймала об'єкт параметрів із 
 * властивостями `companyName` та `stock` та 
 * виводила репорт про кількість товарів на складі будь-якої компанії.
 * 
 * Extended: Переписали так щоб функція прймала масив з обʼєктами
 */

const companies = [
  {
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  },
  {
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }
]

function getStockReport(companies) {
  
  for (let {companyName, stock} of companies) {
    
    let total = 0;
    for (let value of Object.values(stock)) {
      total += value
    }

    console.log(`${companyName} has ${total} items in stock`)
  }
  // return `${companyName} has ${total} items in stock`

}

getStockReport(companies)


/**
 * Task 5
 * Напиши функцію `createContact(contact)` так, щоб вона повертала новий
 * об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
 * значенням "default" якщо в `contact` немає такої властивості.
 */

const createContact = function(contact) {
  // 1. Створити новий обʼєкт
  // 2. Додати до нього нові ключі
  //   id
  //   createdAt
  //   list, якщо його нема, то дати дефолтне значення
  return {
    list: 'default',
    ...contact,
    id: 1
  }
}

const contact = {
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
}

const newContact = createContact(contact);
newContact.name = "Ser. Pan";

console.log(newContact)
console.log(contact)



/**
 * 6. 
 * Напиши функцію `transformUsername(user)` так, 
 * щоб вона повертала новий об'єкт із властивістю
 * `fullName`, замість `firstName` та `lastName`.
 */

const transformUsername = function ({firstName, lastName, ...restProps}) {

  return {
    fullName: `${firstName} ${lastName}`,
    ...restProps
  }
}

const user = {
  id: 1,
  firstName: 'Jacob',
  lastName: 'Mercer',
  email: 'j.mercer@mail.com',
  friendCount: 40,
}

const newUser = transformUsername(user);
console.log(newUser)




const userP = {
  email: "mango@mail.com",
  age: 20
};

const { email: userEmail } = userP;

console.log(email) // Помилка, бо змінної email нема
