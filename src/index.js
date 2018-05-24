import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import MainPage from './Features/MainPage/MainPage';
import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import configureStore from './configure-store.js';

import './style.scss'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <CSSTransitionGroup
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                <div>
                    <Route exact path="/filmzilla" component={MainPage} />
                    <Route path="/filmzilla/description/:id" component={DescriptionPage} />
                    <Route path="*" component={PageNotFound} />
                    <Footer/>
                </div>
            </CSSTransitionGroup>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

module.hot.accept();
