import React from 'react';

class UsersList extends React.Component {
    render() {
        const header = [{name:"Name", email:"Email"}];
        const users = this.props.users;



        const listItems = header.concat(users).map((user, index) => {
            const highlightHeader = (index === 0) ? "t-b" : "";

            return (
                <li className="userItem mbs">
                    <div>
                        <div className={"w50p float-l " + highlightHeader}>
                            {user.name}
                        </div>
                        <div className={"w50p float-r " + highlightHeader}>
                            {user.email}
                        </div>
                    </div>
                </li>
            )
        });

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default UsersList;