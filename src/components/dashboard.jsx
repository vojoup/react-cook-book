import React, { Component } from 'react';
import Recipes from './recipes';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ul>
          <Recipes />
        </ul>
      </div>
    );
  }
}
