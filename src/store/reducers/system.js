
export default function system (state = {
  updated: Date.now(),
  loading: false,
  booting: true
}, action ) {
  switch (action.type) {
        
    case 'SYSTEM/OPEN/NEWISSUE':
      return {
        ...state,
        updated: Date.now(),
        booting: true,
      };

    default:
      return state;
  }
}
