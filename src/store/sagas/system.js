import history from '../history'
import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));


export function* systemChangeRoute(action) {
    // yield console.log ('systemChangeRoute', action.route);
    yield put({ 
        type: 'SYSTEM_UPDATE_ROUTE',
        route: action.route,
    });
    yield history.push(action.route);
}

export function* systemBoot(payload) {
    yield put({ 
        type: 'SYSTEM_BOOT_START',
        payload,
    })
    yield delay(payload.payload.bootTime);
    yield put({ 
        type: 'SYSTEM_BOOT_END',
        payload,
    })
}

export function* watchSystem() {
    yield takeEvery('SYSTEM_CHANGE_ROUTE', systemChangeRoute);  
    yield takeEvery('SYSTEM_BOOT', systemBoot);    
}

export default function* systemSaga() {
    yield all([
        watchSystem(),
    ])
}