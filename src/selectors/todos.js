export default (todos = []) => {
  const incompleteTodos = todos.filter((todo) => {
    return todo.completed === false
  })
  const setDefaults = (
    todo = {
      id: '',
      userId: '',
      title: '',
      completed: false,
    }
  ) => {
    return todo
  }
  const selected =
    incompleteTodos[Math.floor(Math.random() * incompleteTodos.length)]
  return setDefaults(selected)
}
