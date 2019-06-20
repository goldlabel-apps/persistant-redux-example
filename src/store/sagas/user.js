
// import history from '../history';
import { 
    // put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';
//const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* userDoShit(action) {
    yield console.log ('userDoShit', action);
    // yield put({ 
    //     type: 'SYSTEM/UPDATE/ROUTE',
    //     route: action.route,
    // });
    // yield history.push(action.route);
}

export function* watchUser() {
    yield takeEvery('USER/DOSHIT', userDoShit);  
}

export default function* userSaga() {
    yield all([
        watchUser(),
    ])
}