import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import configureStore from './modules/configure-store';

const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;

const store = configureStore(preloadedState);

const root = (
    <Root
        Router={BrowserRouter}
        store={store}
    />
);

ReactDOM.hydrate(root, document.getElementById('root'));

