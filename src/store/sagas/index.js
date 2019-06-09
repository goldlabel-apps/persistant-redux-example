
import { all, fork} from 'redux-saga/effects';
import auth from './auth';
import githubApi from './githubApi';
import system from './system';

export default function* rootSaga() {
    yield all([
        fork(auth),
        fork(system),
        fork(githubApi),
    ])
}
