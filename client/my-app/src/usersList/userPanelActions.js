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
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

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
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

                dispatch(receiveUsers(json))
            )
    }
}

//
//
// const self = this;
// fetch(SERVER_DATA.PATH + SERVER_DATA.endpoints.GET.allStudents, {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json',
//     },
// })
// .then(function(response) {
//     if (response.ok) {
//         response.json().then(json => {
//             self.setState({
//                 users: json
//             });
//         });
//     } else {
//         alert("error")
//     }
// })
// .catch(function(err) {
//     // This is where you run code if the server returns any errors
//     alert("error");
// });
