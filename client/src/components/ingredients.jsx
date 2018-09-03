import React, { Component } from 'react';
import Ingredient from './ingredient';

export default class Ingredients extends Component {
  renderIngredients(ingredients) {
    const ingredientsList = ingredients.map((ing, i) => {
      const { name, amount } = ing;

      return (
        <li className="ingredient-item" key={i}>
          <Ingredient name={name} amount={amount} />
        </li>
      );
    });

    return ingredientsList;
  }

  render() {
    const { ingredients } = this.props;

    return (
      <div>
        <h4>Ingredietnts:</h4>
        <ul>{this.renderIngredients(ingredients)}</ul>
      </div>
    );
  }
}
