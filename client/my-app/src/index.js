import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './forms.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import UsersApp from './reducers';

let store = createStore(UsersApp);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
