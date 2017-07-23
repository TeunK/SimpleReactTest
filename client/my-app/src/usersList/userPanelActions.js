/*
 * action types
 */

export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';

/*
 * other constants
 */



/*
 * action creators
 */

export function addUser(user) {
    return {
        type: ADD_USER,
        user: user
    }
}

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        users:[{name:"loL",email:"ok"}]
    }
}