
const initialState = {
  updated: Date.now(),
  user: null,
  authing: false,
  credentials: [
    {
      username: ``,
      password: ``,
      valid: false,
      remember: true,
    }
  ],
};

export default function auth (state = initialState, action ) {

  switch (action.type) {

    case 'AUTH/UPDATE_CREDENTIALS':
      return {
        ...state,
        updated: Date.now(),
        credentials: [action.payload],
    };
        
    case 'STARTOVER':
      return initialState;

    default:
      return state;
  }
}
