import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'

import { handleFetchTodos } from '../sagas/rootiesaga'
import { todosReducer } from '../reducers/todos'
import { statusReducer } from '../reducers/status'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  todos: todosReducer,
  status: statusReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(handleFetchTodos)

export default store
