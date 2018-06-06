import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import Loadable from 'react-loadable';

// import MainPage from './Features/MainPage/MainPage';
// import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

import './style.scss'

const Loading = () => <div>Loading...</div>;

const MainPage = Loadable({
    loader: () => import('./Features/MainPage/MainPage'),
    loading: Loading,
});

const DescriptionPage = Loadable({
    loader: () => import('./Features/DescriptionPage/DescriptionPage'),
    loading: Loading,
});

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