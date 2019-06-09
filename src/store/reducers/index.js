
import { combineReducers } from 'redux';

import auth from './auth';
import githubApi from './githubApi';
import system from './system';

const initialState = {
  updated: Date.now(),
  newIssue: null,
  nav: null,
}

const top = (state = initialState, action) => {
  switch (action.type) {   
    case 'TOP/RESET':
      return {
        state,
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  top,
  auth,
  githubApi,
  system,
})

export default rootReducer;
