
import { combineReducers } from 'redux';
import system from './system';

const initialState = {
  updated: Date.now(),
  top: null,
}

const topReducer = (state = initialState, action) => {
  // console.log ('action', action);
  switch (action.type) {
        
    case 'TOP_UPDATE_USER':
      const { user } = action;
      if (user === null || !user){
        return {
          ...state,
          user: null,
        };
      }
      const { uid,  displayName, email, photoURL } = action.user
      return {
        ...state,
        user: {
          uid,
          displayName,
          email,
          photoURL,
        },
      };

    default:
      return state
  }
}

const rootReducer = combineReducers({
  topReducer,
  system,
})

export default rootReducer;
