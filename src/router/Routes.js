import React from 'react';
import { Route,Router, Switch, Redirect } from 'react-router-dom';

import Home from '../page/home/index.js'
import Login from '../page/login/index.js'
const createBrowserHistory = require("history").createBrowserHistory
const history = createBrowserHistory();

const Root = ()=>(
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
        </Switch>
    </Router >
)
export default Root