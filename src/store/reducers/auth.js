
const initialState = {
  updated: Date.now(),
  user: null,
  valid: false,
  username: ``,
  password: ``,
  remember: false,
};

export default function auth (state = initialState, action ) {

  switch (action.type) {

    case 'AUTH/USER_UPDATE':
      console.log ('authReducer -> AUTH/USER_UPDATE', state, action);
      return {
        ...state,
        updated: Date.now(),
        user: action.user
      };
        
    case 'STARTOVER':
      return initialState;

    default:
      return state;
  }
}
