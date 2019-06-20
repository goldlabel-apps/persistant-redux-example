
export default function user (state = {
  updated: Date.now(),
  username: `noobie2019`,
  email: `noobie2019@listingslab.com`,
  orgsHidden: false,
  orgs: [
    {
      id: `dasuhd';as;f9q39UY^%*^`,
      name: `first one`,
    },
    {
      id: `1111-2222-3333`,
      name: `The 2nd one`,
    }
  ],
}, action ) {

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

    default:
      return state;
  }
}
