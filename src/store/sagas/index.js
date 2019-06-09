
import { all, fork} from 'redux-saga/effects';
import system from './system';

export default function* rootSaga() {
    yield all([
        fork(system),
    ])
}