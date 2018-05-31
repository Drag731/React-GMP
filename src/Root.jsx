import React from 'react';
import { hot } from 'react-hot-loader';
import './Root.css'

const Root = () => (
    <div>
        <h1 className="xxx">Server Side Rendering</h1>
    </div>
);

export default hot(module)(Root);