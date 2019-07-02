
import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';


export function* authUpdate (action) {
    yield put({ 
        type: 'AUTH/UPDATE_CREDENTIALS',
        payload: action.payload,
    })
}

export function* watchAuth() {
    yield takeEvery('AUTH/UPDATE', authUpdate);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
