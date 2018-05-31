import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';

const root = (
    <Root
        Router={BrowserRouter}
    />
);

ReactDOM.hydrate (
    root, document.getElementById('root')
);


