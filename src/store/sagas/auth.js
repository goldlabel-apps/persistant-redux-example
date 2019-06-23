// import history from '../history';

import { 
    // put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

// export function* authUserUpdate( user = null) {
//     yield console.log ('user', user)
// }

export function* authUpdate (payload) {
    yield console.log ('authSaga -> authUpdate', payload);
    // yield put({ 
    //     type: 'GITHUB/API/AUTH',
    //     payload,
    // })
}

export function* watchAuth() {
    yield takeEvery('AUTH/UPDATE', authUpdate);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
