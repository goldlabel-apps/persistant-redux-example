
export default function system (state = {
  updated: Date.now(),
  newIssue: {
    open: false,
  },
  confirm: {
    open: false,
  },
}, action ) {

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

    default:
      return state;
  }
}
