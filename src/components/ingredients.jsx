import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
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

// Ingredients.prototype = {
//   ingredients: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       amount: PropTypes.number,
//     }).isRequired
//   ),
// };
