import { combineReducers } from 'redux';
import {FETCH_USERS, ADD_USER} from './usersList/userPanelActions';

const initialUsersListState = {
    users: []
};

function usersApp(state=initialUsersListState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return Object.assign({}, state, {
                users: action.users
            });
        case (ADD_USER): {
            const newUsersList = state.users.concat([action.user]);
            return Object.assign({}, state, {
                users: newUsersList
            });
        }
        default:
            return state;
    }
}

const UsersApp = combineReducers({
    usersApp
});

export default UsersApp;