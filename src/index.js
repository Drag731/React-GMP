import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './Features/MainPage/MainPage';
import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import Footer from './components/Footer/Footer'
import configureStore from './configure-store.js';
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore().store;
const persistor = configureStore().persistor;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <div>
                    <Route exact path="/filmzilla" component={MainPage} />
                    <Route path="/filmzilla/description/:id" component={DescriptionPage} />
                    <Footer/>
                </div>
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root')
);

module.hot.accept();
