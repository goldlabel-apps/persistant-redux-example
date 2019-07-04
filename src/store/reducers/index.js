import firebase from 'firebase/app';
import { combineReducers } from 'redux';
import auth from './auth';

const initialState = {
  updated: Date.now(),
  loading: false,
}

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
})


const top = (state = initialState, action) => {
  
  // console.log('top reducer', action.type);
  
  switch (action.type) {   
    case 'STARTOVER':
      return initialState

    case 'TOP/TOGGLE/LOADING':
      // console.log('top reducer', state, );
      return {
        ...state,
        updated: Date.now(),
        loading: action.bool,
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  top,
  auth
})

export default rootReducer;
