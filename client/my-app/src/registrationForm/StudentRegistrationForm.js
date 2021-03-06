import React from 'react'
import CryptoJS from 'crypto-js'
import SERVER_DATA from '../configs/Server';

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
            this.submitForm(user);
            this.setState(
                this.getInitialState()
            );
        }
    }

    submitForm(user) {
        const self = this;
        fetch(SERVER_DATA.PATH + SERVER_DATA.endpoints.POST.registerStudent, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(function(response) {
            response.json().then(json => {
                self.setState({
                    queryResponse: json
                });
            });
        })
        .catch(function(err) {
            alert(err);
        });
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
            },
            queryResponse: {
                error: "",
                message: "",
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
                error: {},
                queryResponse: {
                    error: "",
                    message: "",
                }
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
                            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
                            <span>Male</span>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
                            <span>Female</span>
                        </div>
                        <span className="validation-error">{this.state.error.gender}</span>
                    </label>
                </div>
                <input type="submit" value="Submit" />
                <span className="t-b cRed1 fs18">{this.state.queryResponse.message}</span>
            </form>
        );
    }
}

export default StudentRegistrationForm;