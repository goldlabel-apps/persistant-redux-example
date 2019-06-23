import axios from 'axios';
// import { getStore } from '../../index'
import {
    all,
    call,
    put, 
    takeEvery,
} from 'redux-saga/effects';

function githubApiLogin (email, password) {
    // const user = getStore().getState().auth.user;
    // const token = user.refreshToken;
    // console.log ('githubApiCall', token);
    return axios.request({
        url: 'https://api.github.com/',
        method: 'GET',
        // headers:{
        //     'Authorization': 'token ' + token,
        // }
    });
}


function githubApiCall (callParams) {
    // const user = getStore().getState().auth.user;
    // const token = user.refreshToken;
    // console.log ('githubApiCall', token);
    return axios.request({
        url: 'https://api.github.com/',
        method: 'GET',
        // headers:{
        //     'Authorization': 'token ' + token,
        // }
    });
}

export function* githubApiGetOrgs(action) {
    yield put({ 
        type: 'GITHUBAPI/ORGS/START/LOADING',
    });
    try {
        let { data } = yield call(githubApiCall, action.payload);
    yield console.log (data);
    } catch (e) {
        console.log ('error', e);
    }
}

export function* watchAuth() {
    yield takeEvery('GITHUBAPI/GET/ORGS', githubApiGetOrgs);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
