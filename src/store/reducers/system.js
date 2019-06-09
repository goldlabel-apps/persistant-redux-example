
export default function system (state = {
  updated: Date.now(),
  loading: false,
  booting: true
}, action ) {
  switch (action.type) {
        
    case 'SYSTEM_BOOT_START':
      return {
        ...state,
        updated: Date.now(),
        booting: true,
      };

    case 'SYSTEM_BOOT_END':
      return {
        ...state,
        updated: Date.now(),
        booting: false,
      };

    case 'SYSTEM_BOOT':
      return state;

    default:
      return state;
  }
}
