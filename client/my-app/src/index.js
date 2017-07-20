import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './forms.css';

class StudentRegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            gender: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        this.setState({
                user: event.target.user
            }
        );
    }

    handleSubmit(event) {
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender
        };

        alert('A name was submitted: ' + JSON.stringify(user, null, 2));
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Student Registration</h2>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <div>
                            <input type="radio" name="gender" value="male" onChange={this.handleChange}/>
                            <span>Male</span>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" onChange={this.handleChange}/>
                            <span>Female</span>
                        </div>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class UsersField extends React.Component {
    render() {
        return(
            <div>
                right
            </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return (
            <div className="background-image">
                <div className="mauto bdrs w1000 bdr-rm mtxxl">
                    <div className="w50p float-l mh400 bWht mauto pm">
                        <StudentRegistrationForm/>
                    </div>
                    <div className="w50p float-r mh400 bWht mauto pm">
                        <UsersField/>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Container />,
    document.getElementById('root')
);