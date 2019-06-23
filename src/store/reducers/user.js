
const initialState = {
  updated: Date.now(),
  user: null,
  page: {
    requireAuth: true,
    authTitle: `Restricted Content`,
    authInstruction: `Sign in with Github`,
  },
  orgs: [
    {
      name: `your company`,
      id: `cJMkPDXWSW29ZuvqT9n2`,
    },
    {
      name: `Lorem Ipsum`,
      id: `1111-2222-3333`,
      
    },
    {
      name: `cJMkPDXWSW29ZuvqT9n2`,
      id: `1111-2222-3334`,
    }
  ],
  orgsHidden: false,
};

export default function user (state = initialState, action ) {

  switch (action.type) {
    
    case 'USER/DOSHIT':
      return {
        ...state,
        updated: Date.now()
      };
    
    case 'USER/UPDATE/USERNAME':
        // console.log (action);
        let newUsername = `change to this`;
        return {
            ...state,
            updated: Date.now(),
            username: newUsername
        };

    case 'STARTOVER':
        // console.log('USER STARTOVER', state);
        return initialState;

    default:
      return state;
  }
}
