// import history from '../history';

import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

export function* authStart(payload = {
    username: `username`,
    password: `password`
}) {
    console.log ('authSaga -> authStart', payload);
    yield put({ 
        type: 'GITHUB/API/AUTH',
        payload,
    })
}

export function* watchAuth() {
    yield takeEvery('AUTH/LOGIN', authStart);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}