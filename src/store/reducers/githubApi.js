
export default function githubApi (state = {
  updated: Date.now(),
  orgs: null,
}, action ) {

  switch (action.type) {

    case 'GITHUBAPI/GET/ORGS/START':
      console.log ('GITHUBAPI/GET/ORGS/START', action);
      return {
          ...state,
          updated: Date.now(),
      };
        
    case 'GITHUBAPI/GET/ORGS':
        console.log ('reducer -> githubApi -> GITHUBAPI/GET/ORGS', action);

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
