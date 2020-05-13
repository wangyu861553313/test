import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../page/home/index.js'
const Root = ()=>(
    <div>
        <Switch>
            <Route path='/' component={Home}></Route>
        </Switch>
    </div>
)
export default Root