class ToDo {
  constructor() {
    this.API = axios.create({
      baseURL: 'http://localhost:3000/todo',
      headers: {}
    })
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
    return this.API.delete(`/${taskId}`).then(res => res.data)
  }
}

const todo = new ToDo();