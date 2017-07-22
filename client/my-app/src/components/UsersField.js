import React from 'react';
import UsersList from './UsersList';
import serverData from '../configs/Server';

class UsersField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers() {
        const self = this;
        fetch(serverData.path + serverData.endpoints.GET.allStudents, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then(function(response) {
                if (response.ok) {
                    response.json().then(json => {
                        self.setState({
                            users: json
                        });
                    });
                } else {
                    alert("error")
                }
            })
            .catch(function(err) {
                // This is where you run code if the server returns any errors
                alert("error");
            });
    }

    render() {
        return(
            <div>
                <button onClick={this.fetchUsers}>
                    Get registered students
                </button>
                <UsersList users={this.state.users}/>
            </div>
        );
    }
}

export default UsersField