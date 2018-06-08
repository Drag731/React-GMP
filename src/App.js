import React, { Component, Fragment } from 'react';

import './App.css';
import MainPage from './Features/MainPage/MainPage'
import Footer from './components/Footer/Footer'

class App extends Component {
    render() {
        return (
            <Fragment>
                <MainPage />
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
