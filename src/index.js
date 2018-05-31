import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configure-store.js';


const store = configureStore(window.PRELOADED_STATE);

const root = (
    <Root
        Router={BrowserRouter}
        store={store}
    />
);

ReactDOM.hydrate (
    root, document.getElementById('root')
);


