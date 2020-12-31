import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import { URL } from '../tools/constants'

export function* handleFetchTodos() {
  try {
    const res = yield call(axios.get, URL)

    yield put({
      type: 'SET_TODOS',
      todos: res.data,
    })
  } catch (e) {
    throw new Error('API call unsuccessful')
  }
}
