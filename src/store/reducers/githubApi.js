
export default function githubApi (state = {
  updated: Date.now(),
  orgs: {
    loading: false,
    loaded: false,
    orgsArr: []
  },
}, action ) {

  switch (action.type) {

    case 'GITHUBAPI/ORGS/START/LOADING':
      console.log ('GITHUBAPI/ORGS/START/LOADING');
      return {
          ...state,
          updated: Date.now(),
          orgs: {
            ...state.orgs,
            loading: true,
          }
      };

    case 'TOP/RESET':
        return state;

    default:
        return state;
  }
}
