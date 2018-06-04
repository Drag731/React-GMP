import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { renderRoutes, matchRoutes } from "react-router-config"
import { routes } from "./routes"

import MainPage from './Features/MainPage/MainPage';
import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

import './style.scss'

const Root = ({ Router, location, context, store }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <React.Fragment>
                <Switch>
                    <Route exact path="/filmzilla" component={MainPage} />
                    <Route path="/filmzilla/description/:id" component={DescriptionPage} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
                <Footer/>
            </React.Fragment>
        </Router>
    </Provider>
);

Root.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(Root);