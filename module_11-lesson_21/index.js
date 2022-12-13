/**
 * Завдання із зірочкой: Переписати все на клас
 */

const taskInputRef = document.querySelector('#newTask');
const listRef = document.querySelector('.todo-list');
const clearBtnRef = document.querySelector('#clearList');
const submitBtnRef = document.querySelector('#submit');

let currentId = undefined;

submitBtnRef.addEventListener('click', e => {
  e.preventDefault();

  if (currentId) {
    
    todo.updateTask(currentId, {
      value: taskInputRef.value
    }).then(task => {
      const taskEl = createTaskElement(task);
      const oldEl = listRef.querySelector(`li[data-taskId=${task.id}]`);
      debugger
      console.log(oldEl)
    })

    currentId = undefined

  } else {

    todo.createTask({
      value: taskInputRef.value,
      state: 'pending'
    })
    .then(task => addTaskElement(task))

  } 

})

taskInputRef.addEventListener('keydown', e => {
  if(e.key !== 'Enter') return

  if (currentId) {
    
    todo.updateTask(currentId, {
      value: e.target.value
    }).then(task => {
      const taskEl = createTaskElement(task);
      const oldEl = listRef.querySelector(`li[data-taskId=${task.id}]`);
      debugger
      console.log(oldEl)
    })

    currentId = undefined

  } else {

    todo.createTask({
      value: e.target.value,
      state: 'pending'
    })
    .then(task => addTaskElement(task))

  } 

  

  // let data = JSON.parse(localStorage.getItem('todoList'));

  // if (!data) {
  //   data = []
  // }

  // data.push({
  //   value: e.target.value,
  //   state: 'pending'
  // });

  // const jsonData = JSON.stringify(data);
  

  // localStorage.setItem('todoList', jsonData);
  e.target.value = '';

  // updateToDoList()
});

clearBtnRef.addEventListener('click', e => {
  localStorage.setItem('todoList', '[]');
  updateToDoList()
});

listRef.addEventListener('click', e => {
  if(e.target.className === 'deleteTask') {
    todo.deleteTask(e.target.dataset.taskid).then(task => {
      todo.getAllTask().then(data => {
        updateToDoList(data)
      });
    })
  }

  if(e.target.className === 'confirmTask') {
    completeTask(e.target.dataset.taskid)
  }

  if(e.target.className === 'editTask') {
    todo.getTaskById(e.target.dataset.taskid).then(task => {
      taskInputRef.value = task.value;
      currentId = task.id;
    })
  }
})



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









const updateToDoList = (todoList) => {
  listRef.innerHTML = '';
  listRef.insertAdjacentHTML('beforeend', todoList.map(task => createTaskElement(task)).join(''))
}

const addTaskElement = task => {
  const taskEl = createTaskElement(task)
  listRef.insertAdjacentHTML('beforeend', taskEl)
}

const createTaskElement = task => {
  return `<li class="task-item" data-taskId=${task.id}>
  <span class="${task.state}">${task.value}</span>
  <input type="button" class="confirmTask" data-taskId=${task.id} value="готово">
  <input type="button" class="deleteTask" data-taskId=${task.id} value="видалити">
  <input type="button" class="editTask" data-taskId=${task.id} value="редагувати">
</li>`
}


todo.getAllTask().then(data => {
  updateToDoList(data)
});




















/** Розбір питань */

// const endPoint = 'https://restcountries.com/v3.1/name/';
// const searchParams = '?fields=name,capital,population,flags,languages';

// function fetchCountries(searchCountry="Ukraine") {
//   const urlAPI = `${endPoint}${searchCountry}${searchParams}`;
//   return fetch(urlAPI).then(response => {
//     //   if (!response.ok)
//     if (response.status !== 200) {
//       throw new Error(response.statusText);
//     }
    
    
//     return response.json();
//   });
// }

// const request = fetchCountries();
// console.log(request)
// request.then(data => console.log(data))