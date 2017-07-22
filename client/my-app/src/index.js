import React from 'react';
import ReactDOM from 'react-dom';
import CryptoJS from 'crypto-js'
import './index.css';
import './forms.css';

const serverData = {
    path: "http://localhost:3000",
    endpoints: {
        POST: {
            registerStudent: "/register_student"
        },
        GET: {
            allStudents: "/all_students"
        }
    }
};

class StudentRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();

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
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: CryptoJS.SHA1(this.state.password),
            gender: this.state.gender
        };

        const isValid = this.validateInput();

        if (isValid) {
            alert('A name was submitted: ' + JSON.stringify(user, null, 2));
            this.submitForm(user);
            this.setState(
                this.getInitialState()
            );
        }
    }

    submitForm(user) {
        fetch(serverData.path + serverData.endpoints.POST.registerStudent, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            alert(JSON.stringify(response, null, 2));
        })
        .then((responseData) => { // responseData = undefined
            alert(JSON.stringify(responseData, null, 2));
        })
        .catch(function(err) {
            alert(JSON.stringify(err, null, 2));
        })
    }

    getInitialState() {
        return {
            name: "",
            email: "",
            password: "",
            gender: "",
            error: {
                name: "",
                email: "",
                password: "",
                gender: ""
            }
        }
    }

    validateInput() {
        const testName = this.isNameValid();
        const testEmail = this.isEmailValid();
        const testPassword = this.isPasswordValid();
        const testGender = this.isGenderValid();

        if (testName.isValid && testEmail.isValid && testPassword.isValid && testGender.isValid) {
            this.setState({
                error: {}
            });

            return true;
        } else {
            this.setState({
                error: {
                    name: testName.error,
                    email: testEmail.error,
                    password: testPassword.error,
                    gender: testGender.error
                }
            });

            return false;
        }
    }

    isNameValid() {
        if (this.state.name.length === 0) {
            return {
                isValid: false,
                error: "name field required"
            };
        }

        return { isValid: true, error:"" };
    }

    isEmailValid() {
        const emailAddressFormat = /^s\d{7}@ed.ac.uk$/;

        if (this.state.email.length === 0) {
            return {
                isValid: false,
                error: "email field required"
            };
        } else if (!emailAddressFormat.test(this.state.email)) {
            return {
                isValid: false,
                error: "email must be of format s1581763@ed.ac.uk"
            };
        }

        return { isValid: true, error:"" };
    }

    isPasswordValid() {
        if (this.state.password.length < 6 || this.state.password.length > 24) {
            return {
                isValid: false,
                error: "password must be between 6 and 24 characters long"
            };
        }

        return { isValid: true, error:"" };
    }

    isGenderValid() {
        if (this.state.gender.length === 0) {
            return {
                isValid: false,
                error: "gender field required"
            };
        }

        return { isValid: true, error:"" };
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Student Registration</h2>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <span className="validation-error">{this.state.error.name}</span>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        <span className="validation-error">{this.state.error.email}</span>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <span className="validation-error">{this.state.error.password}</span>
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
                        <span className="validation-error">{this.state.error.gender}</span>
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
                <div className="mauto flex bdrs w1000 bdr-rm mtxxl">
                    <div className="w50p flex-size-1 mh600 bWht mauto pm">
                        <StudentRegistrationForm/>
                    </div>
                    <div className="w50p flex-size-1 inline-block mh600 bWht mauto pm">
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