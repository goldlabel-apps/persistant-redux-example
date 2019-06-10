
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
  // console.log('top reducer', action);
  switch (action.type) {   
    case 'SYSTEM/OPEN/NEWISSUE':
      return {
        ...state,
        updated: Date.now(),
        newIssue: {
          open: true
        }
      };
    
    case 'SYSTEM/CLOSE/NEWISSUE':
      return {
        ...state,
        updated: Date.now(),
        newIssue: {
          open: false
        }
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
