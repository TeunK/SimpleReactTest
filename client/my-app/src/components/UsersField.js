import React from 'react';
import UsersList from './UsersList';
import PropTypes from 'prop-types';

const UsersField = ({users, fetchUsers}) => (

    <div>
        <button onClick={fetchUsers}>
            Get registered students
        </button>
        <UsersList users={users}/>
    </div>
);

UsersField.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    fetchUsers: PropTypes.func.isRequired
};

export default UsersField