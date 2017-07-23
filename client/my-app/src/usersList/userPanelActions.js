import fetch from 'isomorphic-fetch';
import SERVER_DATA from '../configs/Server';

/*
 * action types
 */

export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
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

export function queryUsers() {
    return {
        type: FETCH_USERS
    }
}


function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}





export function fetchUsers() {

    return function (dispatch) {
        dispatch(queryUsers());
        return fetch(SERVER_DATA.PATH + SERVER_DATA.endpoints.GET.allStudents, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }).then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receiveUsers(json))
            )
    }
}