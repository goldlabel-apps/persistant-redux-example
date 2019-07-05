
// [KANBAN](https://github.com/listingslab-software/agile-pwa/projects/1)

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
