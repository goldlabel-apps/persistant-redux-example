
const initialState = {
  updated: Date.now(),
  newIssue: {
    open: false,
  },
  confirm: {
    open: false,
  },
  content: {
    userPage:{
      title: `User Page`,
      subTitle: `Do user shit`,
      media: `youtube`,
    },
    loginPage:{
      title: `Login`,
      subTitle: `You will be connecting your Github account.`,
      media: `github`,
    }
  }
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
