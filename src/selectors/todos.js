export default (todos = []) => {
  const incompleteTodos = todos.filter((todo) => {
    return todo.completed === false
  })
  return incompleteTodos[Math.floor(Math.random() * incompleteTodos.length)]
}
