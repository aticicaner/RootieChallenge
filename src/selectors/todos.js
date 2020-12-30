export default (todos = []) => {
  return todos[Math.floor(Math.random() * todos.length)]
}
