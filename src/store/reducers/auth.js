
const initialState = {
  updated: Date.now(),
  user: null,
};

export default function auth (state = initialState, action ) {

  switch (action.type) {

    case 'AUTH/USER_UPATE':
      // console.log ('authReducer -> AUTH/USER_UPATE', state, action);
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
