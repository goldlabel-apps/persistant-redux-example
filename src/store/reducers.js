import { combineReducers } from 'redux';
import app from './app/app.reducer';
import log from './log/log.reducer';
import userEntity from './userEntity/userEntity.reducer';

export default combineReducers({
  app,
  log,
  userEntity,
});
