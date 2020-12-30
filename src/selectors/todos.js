export default (todos = [], { count = 1, color = 'blue' }) => {
  return todos[Math.floor(Math.random() * todos.length)] //return a random todo
}
