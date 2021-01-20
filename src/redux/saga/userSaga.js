import {call, put, takeEvery} from 'redux-saga/effects'

const api = 'https://jsonplaceholder.typicode.com/users'

function getApi() {
    return fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(e => {throw(e)})
}

function* fetchUser(actions) {
  try {
    const users = yield call(getApi);
    yield put({type: 'GET_USER_SUCCESS', users: users})
  } catch(e) {
     yield put({type: 'GET_USER_FAILED', message: e.message})
  }
}

function* userSaga() {
    yield takeEvery('GET_USER_REQUESTED', fetchUser)
}

export default userSaga;