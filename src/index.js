import packageJSON from '../package.json';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-muli';
import muiTheme from './theme/mui';
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log (`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);
const theme = createMuiTheme( muiTheme );
const store = configureStore();

const getStore = () => { return store; };
export { getStore };

firebase.initializeApp(firebaseConfig);
firebase.firestore(); 
const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch
}


ReactDOM.render(
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
, document.getElementById('root'));
serviceWorker.register();