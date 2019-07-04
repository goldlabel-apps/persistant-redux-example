
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
