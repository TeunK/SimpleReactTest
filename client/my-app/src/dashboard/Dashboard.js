import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();

        this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggleLogin() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    getInitialState() {
        return {
            isLoggedIn: false
        }
    }

    render() {
        let content = {};
        if (this.state.isLoggedIn) {
            content = <div className="ptxl"><div className="txtc t-b mh400">Congratulations, you are logged in!</div><button className="ptm" onClick={this.toggleLogin}>Click here to log out</button></div>
        } else {
            content = <div className="ptxl"><div className="txtc t-b mh400">You're not registered</div><button className="ptm" onClick={this.toggleLogin}>Click here to login as ADMIN</button></div>
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default Dashboard;