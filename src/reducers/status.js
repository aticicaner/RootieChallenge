const statusReducerDefaultState = []

export default (state = statusReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.status
  }
}
