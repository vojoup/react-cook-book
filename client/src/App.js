import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';
import RecipeDetailPage from './components/recipe-detail-page';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
