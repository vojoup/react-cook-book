import React, { Component } from 'react';
import Ingredients from './ingredients';

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        { name: 'Hamburger', ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }], rating: 4.5 },
        {
          name: 'Spaggetti',
          ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
          rating: 4.9999,
        },
        {
          name: 'Kus-kus',
          ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
          rating: 4.5,
        },
        { name: 'Hamburger', ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }], rating: 4.5 },
        {
          name: 'Spaggetti',
          ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
          rating: 4.9999,
        },
        {
          name: 'Kus-kus',
          ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
          rating: 4.5,
        },
      ],
    };
  }

  renderRecipes() {
    const { recipes } = this.state;
    const recipesList = recipes.map((recipe, i) => {
      const { ingredients } = recipe;

      return (
        <li className="recipe-item" key={i}>
          <h3>{recipe.name}</h3>
          <Ingredients ingredients={ingredients} />
        </li>
      );
    });

    return recipesList;
  }

  render() {
    return <div>{this.renderRecipes()}</div>;
  }
}
