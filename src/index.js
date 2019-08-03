import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import ErrorPage from './pages/ErrorPage';
import { Provider } from "react-redux";
import store from "./store/store";


import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();


ReactDOM.render( 
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/constructor' component={BurgerConstructor}/>
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
