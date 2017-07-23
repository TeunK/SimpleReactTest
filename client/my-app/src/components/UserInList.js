import React from 'react';
import PropTypes from 'prop-types';

const UserInList = ({user, highlighted}) => (
    <li className="userItem mbs">
        <div>
            <div className={"w50p float-l " + highlighted}>
                {user.name}
            </div>
            <div className={"w50p float-r " + highlighted}>
                {user.email}
            </div>
        </div>
    </li>
);

UserInList.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    highlighted: PropTypes.string.isRequired
};

export default UserInList;