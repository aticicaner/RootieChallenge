import { call, put } from 'redux-saga/effects'

const api = 'https://jsonplaceholder.typicode.com/todos'

export function* handleFetchTodos() {
  try {
    yield put({ type: 'SET_STATUS', status: 'loading' })
    let resp = yield call(api)

    yield put({
      type: 'SET_TODOS',
      todos: resp.data,
    })
    yield put({ type: 'SET_STATUS', status: 'complete' })
  } catch (e) {
    yield put({ type: 'SET_STATUS', status: 'error', e })
  }
}
