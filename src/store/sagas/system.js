
// import history from '../history';
import { 
    // put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';
//const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* systemOpenNewIssue(action) {
    yield console.log ('systemOpenNewIssue', action);
    // yield put({ 
    //     type: 'SYSTEM/UPDATE/ROUTE',
    //     route: action.route,
    // });
    // yield history.push(action.route);
}

export function* watchSystem() {
    yield takeEvery('SYSTEM/OPEN/NEWISSUE', systemOpenNewIssue);  
}

export default function* systemSaga() {
    yield all([
        watchSystem(),
    ])
}