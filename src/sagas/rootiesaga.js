import { call, put } from 'redux-saga/effects'

import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
  const result = axios.get(URL).then((res) => {
    // console.log(res)
    console.log('request success, ', res.data[0])
  })
  return result
}

export function* handleFetchTodos() {
  try {
    yield put({ type: 'SET_STATUS', status: 'loading' })
    let resp = yield call(fetchTodos())

    yield put({
      type: 'SET_TODOS',
      todos: resp.data,
    })
    yield put({ type: 'SET_STATUS', status: 'complete' })
  } catch (e) {
    yield put({ type: 'SET_STATUS', status: 'error', e })
  }
}
