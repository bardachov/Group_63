class ToDo {
  constructor() {
    this.API = axios.create({
      baseURL: 'http://localhost:3000/todo',
      headers: {}
    })
  }
  setCurrentTask (id) {
    this.currentTaskID = id // keep current task id for editing
  }
  getAllTask () {
    return this.API.get().then(res => res.data)
  }
  getTaskById (taskId) {
    return this.API.get(`/${taskId}`).then(res => res.data)
  }
  createTask (task) {
    return this.API.post('', task).then(res => res.data)
  }
  updateTask (taskId, task) {
    return this.API.patch(`/${taskId}`, task).then(res => res.data)
  }
  deleteTask (taskId) {
    return this.API.delete(`/${taskId}`).then(res => res.status === 200 ? taskId : null)
  }
}

const todo = new ToDo();