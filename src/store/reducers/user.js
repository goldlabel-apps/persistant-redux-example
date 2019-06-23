
const initialState = {
  updated: Date.now(),
  username: `noobie2019`,
  email: `noobie2019@listingslab.com`,
  orgsHidden: false,
  orgs: [
    {
      id: `cJMkPDXWSW29ZuvqT9n2`,
      name: `first one`,
    },
    {
      id: `1111-2222-3333`,
      name: `Lorem Ipsum`,
    },
    {
      id: `1111-2222-3334`,
      name: `dolar imet`,
    }
  ],
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
