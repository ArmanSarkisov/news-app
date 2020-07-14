import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Category from '../pages/Category';
import SearchResult from '../pages/SearchResult';

const Routes = () => {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:id" component={Category} />
        <Route path="/search" component={SearchResult} />
        <Redirect from="*" to="/" />
    </Switch>
};


export default Routes;
