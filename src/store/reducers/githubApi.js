
export default function githubApi (state = {
  updated: Date.now(),
  authing: false,
  user: null,
}, action ) {

  switch (action.type) {
        
    case 'GITHUB/API/PING':
        console.log ('reducer -> githubApi -> GITHUB/API/PING', action);
        return {
            ...state,
            updated: Date.now(),
        };

    case 'TOP/RESET':
        return state;

    default:
        return state;
  }
}
