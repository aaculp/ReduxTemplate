import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/home/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;