
import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';


export function* authSignin(action) {
    yield console.log ('authSignin', action)
    yield put({ 
        type: 'TOP/TOGGLE/LOADING',
        bool: true,
    })
    yield put({ 
        type: 'AUTH/TOGGLE/AUTHING',
        bool: true,
    })
}


export function* authUpdate (action) {
    yield put({ 
        type: 'AUTH/UPDATE_CREDENTIALS',
        payload: action.payload,
    })
}

export function* watchAuth() {
    yield takeEvery('AUTH/UPDATE', authUpdate);
    yield takeEvery('AUTH/SIGNIN', authSignin);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
