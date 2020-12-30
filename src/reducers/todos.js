const todosReducerDefaultState = []

export const todosReducer = (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos
    default:
      return state
  }
}
