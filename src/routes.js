import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Application from './pages/Main';
import AboutUs from './pages/AboutUs';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Application} />
                <Route path="/sobrenos" component={AboutUs} />
            </Switch>
        </BrowserRouter>
    );
}

