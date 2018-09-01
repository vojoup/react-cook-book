import React, { Component } from 'react';
import Recipes from './recipe';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ul>
          <Recipes />
        </ul>
      </div>
    );
  }
}
