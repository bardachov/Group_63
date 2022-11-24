/**
 * Завдання із зірочкой: Переписати все на клас
 */

const taskInputRef = document.querySelector('#newTask');
const listRef = document.querySelector('.todo-list');
const clearBtnRef = document.querySelector('#clearList');

taskInputRef.addEventListener('keydown', e => {

  if(e.key !== 'Enter') return

  let data = JSON.parse(localStorage.getItem('todoList'));

  if (!data) {
    data = []
  }

  data.push({
    value: e.target.value,
    state: 'pending'
  });

  const jsonData = JSON.stringify(data);
  

  localStorage.setItem('todoList', jsonData);
  e.target.value = '';

  updateToDoList()
});

clearBtnRef.addEventListener('click', e => {
  localStorage.setItem('todoList', '[]');
  updateToDoList()
});

listRef.addEventListener('click', e => {
  if(e.target.className === 'deleteTask') {
    deleteTask(e.target.dataset.taskid)
  }

  if(e.target.className === 'confirmTask') {
    completeTask(e.target.dataset.taskid)
  }
})

const updateToDoList = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList'));
  listRef.innerHTML = '';

  todoList.forEach(({value, state}, index) => {
    listRef.insertAdjacentHTML('beforeend', `
      <li class="task-item">
      <span class="${state}">${value}</span>
      <input type="button" class="confirmTask" data-taskId=${index} value="готово">
      <input type="button" class="deleteTask" data-taskId=${index} value="видалити">
    </li>`)
    
    // const li = document.createElement('li');
    // const span = document.createElement('span');
    // const btnConfirm = document.createElement('button');
    // const btnRemove = document.createElement('button');

    // btnConfirm.textContent = 'Done';
    // btnConfirm.id = 'confirmTask';
    
    // btnRemove.textContent = 'Remove';
    // btnRemove.id = 'removeTask';
    
    // span.textContent = task;

    // li.append(span)
    // li.append(btnConfirm)
    // li.append(btnRemove);

    // listRef.append(li);
  })
}

const deleteTask = (id) => {
  
  const data = JSON.parse(localStorage.getItem('todoList'));
  data.splice(id, 1);
  
  localStorage.setItem('todoList', JSON.stringify(data))
  updateToDoList()
}


const completeTask = (id) => {
  const data = JSON.parse(localStorage.getItem('todoList'));

  data[id] = {
    ...data[id],
    state: 'done'
  }

  localStorage.setItem('todoList', JSON.stringify(data))
  updateToDoList()

}

updateToDoList()


/**
 * Нижче розбір питань
 */

// const object = {
//   "name": "Mango",
//   "age": 2,
// }

// const objjson = JSON.stringify(object);
// console.log(objjson);

// const data = JSON.parse(objjson);
// console.log(data)


// try {
//   JSON.parse('adsfasfas')
//   const a = 5;
//   const sum = a + b
// } catch (error) {
//   console.log(error)
// }


// // console.log('Next')

// // localStorage.setItem('number', 54);
// // const val = localStorage.getItem('number');
// // console.log(val, typeof val)

// const formRef = document.querySelector('#form');

// formRef.addEventListener('submit', e => {
//   e.preventDefault();

//   // const elements = e.currentTarget.elements;

//   // const {
//   //   elements
//   // } = e.currentTarget;


//   // const {
//   //   name,
//   //   lastname
//   // } = e.currentTarget.elements
  
//   // const user = {
//   //   name: name.value,
//   //   surname: lastname.value
//   // }

//   const {
//     elements: {
//       name,
//       lastname
//     }
//   } = e.currentTarget

//   const data = JSON.stringify(user);
//   localStorage.setItem('user', data)
  
//   const userData = localStorage.getItem('user');
//   const parsedUser = JSON.parse(userData);

//   console.log(parsedUser)
// })