import React from 'react';
import StudentRegistrationForm from './registrationForm/StudentRegistrationForm';
import RenderUsers from './usersList/UsersContainer';
import Dashboard from './dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

const AppComponent = () => (
    <div className="background-image">
        <div className="mauto flex bdrs w1000 bdr-rm mtxxl">
            <div className="w50p flex-size-1 mh600 bWht mauto pm">
                <Switch>
                    <Route exact path='/' component={StudentRegistrationForm}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                </Switch>
            </div>
            <div className="w50p flex-size-1 inline-block mh600 bWht mauto pm">
                <RenderUsers/>
            </div>
        </div>
    </div>
);

export default AppComponent;