import React from 'react';
import UserList from './UserListComponent';
import PropTypes from 'prop-types';

const UserPanel = ({users, fetchUsers}) => (

    <div>
        <button onClick={fetchUsers}>
            Get registered students
        </button>
        <UserList users={users}/>
    </div>
);

UserPanel.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    fetchUsers: PropTypes.func.isRequired
};

export default UserPanel