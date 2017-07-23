import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/forms.css';
import AppComponent from './AppComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import UsersApp from './reducers';


let store = createStore(
    UsersApp,
    applyMiddleware(
        thunkMiddleware
    )
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
