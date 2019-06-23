
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import rootSaga from './sagas/index';

const persistConfig = {
  key: "agile-pwa",
  storage
};

const rootReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

export function configureStore () {
  const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWares)),
  )
   sagaMiddleware.run(rootSaga); 
   return store;
};