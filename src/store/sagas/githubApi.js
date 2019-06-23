// import history from '../history';

import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

export function* githubApiGetOrgs(payload) {
    console.log ('githubApi Saga -> githubApiPing', payload);
    // yield put({ 
    //     type: 'GITHUB/API/PING',
    //     payload,
    // })
}

export function* watchAuth() {
    yield takeEvery('GITHUBAPI/GET/ORGS', githubApiGetOrgs);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}