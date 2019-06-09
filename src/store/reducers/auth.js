
export default function auth (state = {
  updated: Date.now(),
  authing: false,
  user: null,
}, action ) {

  switch (action.type) {
        
    case 'AUTH_START':
      console.log ('authReducer -> AUTH_START', action);
      return {
        ...state,
        updated: Date.now(),
        authing: true,
      };

    case 'AUTH_END':
      return {
        ...state,
        updated: Date.now(),
        authing: false,
      };

    case 'TOP/RESET':
      return state;

    default:
      return state;
  }
}
