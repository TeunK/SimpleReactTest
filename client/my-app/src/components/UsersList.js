import React from 'react';
import UserInList from './UserInList';
import PropTypes from 'prop-types';

const UsersList = (users) => {
    const header = [{name: "Name", email: "Email"}];
    const listItems = header.concat(users.users).map((user, index) => {
        const highlightHeader = (index === 0) ? "t-b" : "";

        return (
            <UserInList key={index} user={user} highlighted={highlightHeader}/>
        )
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};


export default UsersList;