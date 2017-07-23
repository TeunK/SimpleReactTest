import React from 'react';
import UserItem from './UserItemComponent';
import PropTypes from 'prop-types';

const UserList = (users) => {
    const header = [{name: "Name", email: "Email"}];
    const listItems = header.concat(users.users).map((user, index) => {
        const highlightHeader = (index === 0) ? "t-b" : "";

        return (
            <UserItem key={index} user={user} highlighted={highlightHeader}/>
        )
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};


export default UserList;