import packageJSON from '../package.json';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-muli';
import { configureStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import {
  AppShell
} from './neo-containers';
import * as serviceWorker from './serviceWorker';

console.log (`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);

/*
  ## [TODO] Auto Update

  - [STOP] mounting the app... till we're ready.
    - put the ReactDom render into something connected to a saga
    - make that saga do an async lookup of the version.json file
    
    ### Issue Description
    
    If the user has and old **redux shape** stored locally, 
    it often breaks a new build which results in an unrecoverable 
    error - the white screen of death.

    WSOD means that react crashes, and when that user is using it as a PWA 
    they can't interact with it in any way to force a refresh like they 
    can traditionally on a browser.

    To manage this, we create a version.json file in the public root. 
    React reads the version, compares it to the version saved locally and if 
    it isn't, it bloody should be.

      - check if this is a new version of the app
        - if so... localStorage.clear()
        - send feedback to user `{appName} has been auto updated to version {appVersion}`
        
*/


const store = configureStore();
const getStore = () => { return store; };
export { getStore };
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppShell />
    </PersistGate>
  </Provider>
, document.getElementById('agiliepwa'));

serviceWorker.register();
