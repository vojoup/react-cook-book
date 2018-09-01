import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-text">Recipes Book</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
