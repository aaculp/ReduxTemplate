import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainLayout from './hoc/mainLayout'
import Home from './components/home/index'
import Header from './components/Header'
import Contact from './components/contact'
import PostComponent from './components/posts/index'

const Routes = () => (
    <BrowserRouter>
        <Header />

        <MainLayout>
            <Switch>
                <Route path='/article/:id' component={PostComponent} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/' component={Home} />
            </Switch>
        </MainLayout>

    </BrowserRouter>
)

export default Routes;