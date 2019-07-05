
export function topReset () {
    return { 
        type: 'TOP/RESET'
    };
}

export function topConfirm (payload) {
    return { 
        type: 'TOP/CONFIRM', 
        payload
    };
}

export function authUpdate (payload) {
    return { 
        type: 'AUTH/UPDATE', 
        payload
    };
}

export function authSignin (payload) {
    return { 
        type: 'AUTH/SIGNIN', 
        payload
    };
}
