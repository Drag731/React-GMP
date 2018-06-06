import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './modules/configure-store.js';
import Loadable from 'react-loadable';

const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;

const store = configureStore(preloadedState);

const root = (
    <Root
        Router={BrowserRouter}
        store={store}
    />
);

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
        root, document.getElementById('root')
    );
});


