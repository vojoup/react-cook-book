import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';
import RecipeDetailPage from './components/recipe-detail-page';
import Header from './components/header';
import NewRecipe from './components/new-recipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/recipe" component={RecipeDetailPage} />
          <Route path="/newRecipe" component={NewRecipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
