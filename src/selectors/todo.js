import { TITLE_CHARACTER_LIMIT } from '../tools/constants'

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
    if (todo.title.length > TITLE_CHARACTER_LIMIT) {
      todo.title = todo.title.substring(0, TITLE_CHARACTER_LIMIT).concat('...')
    }
    return todo
  }
  const selected =
    incompleteTodos[Math.floor(Math.random() * incompleteTodos.length)]
  return setDefaults(selected)
}
