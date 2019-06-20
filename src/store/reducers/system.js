
const initialState = {
  updated: Date.now(),
  newIssue: {
    open: false,
  },
  confirm: {
    open: false,
  },
};

export default function system (state = initialState, action ) {

  // console.log (action)
  switch (action.type) {
    
    case 'SYSTEM/OPEN/NEWISSUE':
      return {
        ...state,
        updated: Date.now(),
        newIssue: {
          open: true
        }
      };
    
    case 'SYSTEM/CLOSE/NEWISSUE':
      return {
        ...state,
        updated: Date.now(),
        newIssue: {
          open: false
        }
      };

    case 'STARTOVER':
        // console.log('USER STARTOVER', state);
        return initialState;

    default:
      return state;
  }
}
