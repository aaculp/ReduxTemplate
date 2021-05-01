import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainLayout from './hoc/mainLayout'
import Home from './components/home/index'
import Header from './components/Header'

const Routes = () => (
    <BrowserRouter>
        <Header />

        <MainLayout>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </MainLayout>

    </BrowserRouter>
)

export default Routes;