import firebase from 'firebase/app';
import { combineReducers } from 'redux';
import auth from './auth';
import githubApi from './githubApi';
import system from './system';
import user from './user';

const initialState = {
  updated: Date.now(),
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
