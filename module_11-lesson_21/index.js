const refs = {
  taskInput: document.getElementById('newTask'),
  tasksList: document.querySelector('.todo-list'),
  clearBtn: document.querySelector('#clearList')
}


refs.taskInput.addEventListener('keyup', e => {
  if(e.key !== "Enter") return
  
  const taskToUpdate = e.target.dataset.updatingTask;
  const task = {
    value: e.target.value,
  };

  if (taskToUpdate) {
    
    todo.updateTask(taskToUpdate, task)
    .then(task => {
      updateTaskElement(task)
      delete e.target.dataset.updatingTask
    })

  } else {
    
    todo.createTask({...task, state: 'pending'})
    .then(task => addTaskElement(task))

  }

  e.target.value = ''
});

refs.tasksList.addEventListener('click', e => {
  const targetClass = e.target.className;
  const taskId = e.target.dataset.taskid;

  switch(targetClass) {
    case 'editTask': {
      todo.getTaskById(taskId).then(task => {
        refs.taskInput.value = task.value;
        refs.taskInput.dataset.updatingTask = taskId;
      });
      
      break;
    }
    case 'deleteTask': {
      todo.deleteTask(taskId).then(taskId => {
        refs.tasksList
        .querySelector(`li[data-taskid="${taskId}"]`)
        .remove();
      });
      
      break;
    }
    case 'confirmTask': {
      todo.updateTask(taskId, {state: 'done'})
      .then(task => updateTaskElement(task));
      
      break;
    } 
    default: {
      console.count('no handler')
    }
  }
})

const updateToDoList = (todoList) => {
  refs.tasksList.innerHTML = '';
  refs.tasksList.insertAdjacentHTML('beforeend', todoList.map(task => createTaskElement(task)).join(''))
}

const addTaskElement = task => {
  const taskEl = createTaskElement(task)
  refs.tasksList.insertAdjacentHTML('beforeend', taskEl)
}

const updateTaskElement = (task) => {
  const taskEl = refs.tasksList.querySelector(`li[data-taskid="${task.id}"]`)
  
  taskEl.firstElementChild.textContent = task.value
  taskEl.firstElementChild.className = task.state
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