import {appState} from './app/app.state';
import {userEntityState} from './userEntity/userEntity.state';
import {logState} from './log/log.state';

const initialState = {
	app: {appState},
	log: {logState},
	userEntity: {userEntityState},
};

export default initialState;
