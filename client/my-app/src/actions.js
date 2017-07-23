/*
 * action types
 */

export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
/*
 * other constants
 */

export const SERVER_DATA = {
    PATH: 'http://localhost:3000',
    endpoints: {
        POST: {
            registerStudent: "/register_student"
        },
        GET: {
            allStudents: "/all_students"
        }
    }
};



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
    // fetch(SERVER_DATA.PATH + SERVER_DATA.endpoints.GET.allStudents, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //     },
    // })
    // .then(function (response) {
    //     if (response.ok) {
    //         response.json()
    //             .then(users_json => {
    //                 return users_json;
    //             });
    //     } else {
    //         alert("error")
    //     }
    // })
    // .catch(function (err) {
    //     // This is where you run code if the server returns any errors
    //     alert("error");
    // });
}

// export function addTodo(text) {
//     return { type: ADD_TODO, text }
// }
//
// export function toggleTodo(index) {
//     return { type: TOGGLE_TODO, index }
// }
//
// export function setVisibilityFilter(filter) {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }