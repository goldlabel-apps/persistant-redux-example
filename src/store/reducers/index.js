import firebase from 'firebase/app';
import { combineReducers } from 'redux';
import auth from './auth';

const initialState = {
  updated: Date.now(),
  loading: false,
  confirm: false,
  message: false,
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
  
  switch (action.type) {   

    case 'TOP/CONFIRM':
      return {
        ...state,
        updated: Date.now(),
        confirm: action.payload,
      }

    case 'TOP/TOGGLE/LOADING':
      return {
        ...state,
        updated: Date.now(),
        loading: action.bool,
      }

    case 'TOP/RESET':
      return initialState;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  top,
  auth
})

export default rootReducer;
