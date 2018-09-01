import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';
import RecipeDetailPage from './components/recipe-detail-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-text">Recipes Book</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/recipe" component={RecipeDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
