import React, { Component } from 'react';
import logo from '../logo.svg';
import List from "./List";
import Form from "./Form"
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Redux Tutorial</h1>
        </header>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
          </div>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
