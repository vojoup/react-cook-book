import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeDetail from './recipe-detail';

export default class RecipeDetailPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/recipe/:id" component={RecipeDetail} />
      </Switch>
    );
  }
}
