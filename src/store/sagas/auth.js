
import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';


export function* authLogin(action) {
    yield console.log ('authLogin', action)
    // yield put({ 
    //     type: 'AUTH/UPDATE_CREDENTIALS',
    //     payload: action.payload,
    // })
}


export function* authUpdate (action) {
    yield put({ 
        type: 'AUTH/UPDATE_CREDENTIALS',
        payload: action.payload,
    })
}

export function* watchAuth() {
    yield takeEvery('AUTH/UPDATE', authUpdate);
    yield takeEvery('AUTH/LOGIN', authLogin);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
