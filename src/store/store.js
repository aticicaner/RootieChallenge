import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { handleFetchTodos } from '../sagas/todoSaga'
import { todosReducer } from '../reducers/todos'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  todos: todosReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(handleFetchTodos)

export default store
