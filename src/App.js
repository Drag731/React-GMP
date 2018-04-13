import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createElement } from "./examples/CreateElement"
import { FuncComponent } from "./examples/FuncComponent"
import { ReactComponent } from "./examples/ReactComponent"
import { ReactPureComponent } from "./examples/ReactPureComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {createElement}
        <FuncComponent/>
        <ReactComponent/>
        <ReactPureComponent/>
      </div>
    );
  }
}

export default App;
