const STORAGE_KEY = 'todos-vuejs-2.0'

export default {
  build(attrs = {}) {
    return {
      completed: false,
      ...attrs,
      __type: 'Todo',
      id: ++this.uid
    }
  },

  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },

  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
