
import { combineReducers } from 'redux';

import auth from './auth';
import githubApi from './githubApi';
import system from './system';
import user from './user';

const initialState = {
  updated: Date.now(),
}

const top = (state = initialState, action) => {
  // console.log('top reducer', action.type);
  switch (action.type) {   
    case 'STARTOVER':
      // console.log(state, initialState);
      return initialState

    default:
      return state
  }
}

const rootReducer = combineReducers({
  top,
  auth,
  githubApi,
  system,
  user,
})
export default rootReducer;
