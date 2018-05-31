import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

ReactDOM.hydrate (
    <Root/>, document.getElementById('root')
);

module.hot.accept();
