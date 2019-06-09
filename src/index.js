import packageJSON from '../package.json';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-muli';

// import { configureStore } from './store/configureStore';
// import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {AppShell} from './neo-containers';
import * as serviceWorker from './serviceWorker';

console.log (`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID
};
firebase.initializeApp(firebaseConfig);
// 
// const store = configureStore();
// const getStore = () => { return store; };
// export { getStore };

// firebase.firestore(); 
// const rrfProps = {
//   firebase,
//   config: {
//     userProfile: 'users',
//     useFirestoreForProfile: true,
//   },
//   dispatch: store.dispatch
// }


ReactDOM.render(
  <React.Fragment>
    <AppShell />
  </React.Fragment>
, document.getElementById('root'));
serviceWorker.register();


/*
<Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
      <MuiThemeProvider theme={theme}>
        <App />
        <React.Fragment>
          dasudh
        </React.Fragment>
      </MuiThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
*/