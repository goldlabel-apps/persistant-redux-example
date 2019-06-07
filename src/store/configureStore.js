
import { createStore, compose, combineReducers } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';



const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export function configureStore () {
  return createStoreWithFirebase(rootReducer, {});
};
