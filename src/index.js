import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './Features/MainPage/MainPage';
import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import Footer from './components/Footer/Footer'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/filmzilla" component={MainPage} />
            <Route path="/filmzilla/description/:id" component={DescriptionPage} />
            <Footer/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

module.hot.accept();
