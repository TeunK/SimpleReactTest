import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class StudentRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div>
                left
            </div>
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