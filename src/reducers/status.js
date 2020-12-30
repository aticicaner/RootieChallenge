const statusReducerDefaultState = 'incomplete'

export const statusReducer = (state = statusReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.status
    default:
      return state
  }
}
