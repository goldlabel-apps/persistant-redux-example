
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
    },
    loginPage:{
      title: `Agile PWA`,
      subTitle: `A Progressive Web App for Teams using Github`,
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
        return initialState;

    default:
      return state;
  }
}
