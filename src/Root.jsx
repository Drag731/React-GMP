import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import NoFilmFound from './components/NoFilmsFound/NoFilmsFound';
import PageNotFound from './components/PageNotFound/PageNotFound';

const Root = ({ Router, location, context }) => (
    <Router location={location} context={context}>
        <div>
            <h1>Server Side Renderig</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={NoFilmFound} />
                <Route path="/users" component={PageNotFound} />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
);

Root.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(Root);