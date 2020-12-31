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
    if (todo.title.length > 35) {
      todo.title = todo.title.substring(0, 35).concat('...')
    }
    return todo
  }
  const selected =
    incompleteTodos[Math.floor(Math.random() * incompleteTodos.length)]
  return setDefaults(selected)
}
