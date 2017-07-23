import React from 'react';
import StudentRegistrationForm from './StudentRegistrationForm';
import RenderUsers from '../containers/RenderUsers'
import { Switch, Route } from 'react-router-dom';

const App = () => (
    <div className="background-image">
        <div className="mauto flex bdrs w1000 bdr-rm mtxxl">
            <div className="w50p flex-size-1 mh600 bWht mauto pm">
                <Switch>
                    <Route exact path='/' component={StudentRegistrationForm}/>
                </Switch>
            </div>
            <div className="w50p flex-size-1 inline-block mh600 bWht mauto pm">
                <RenderUsers/>
            </div>
        </div>
    </div>
);

export default App;