import React, { Component } from 'react';
import Grid from 'react-css-grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Ingredients from './ingredients';
import { getAllRecipes } from '../actions/recipe-actions';

class Recipes extends Component {
  componentWillMount() {
    const { getRecipes } = this.props;
    getRecipes();
  }

  renderRecipes() {
    const { recipes } = this.props;
    const recipesList = recipes.map((recipe, i) => {
      const { ingredients } = recipe;

      return (
        <Link to={`/recipe/${i}`} key={i}>
          <li className="recipe-item">
            <h3>{recipe.name}</h3>
            <Ingredients ingredients={ingredients} />
          </li>
        </Link>
      );
    });

    return recipesList;
  }

  render() {
    return <Grid>{this.renderRecipes()}</Grid>;
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getAllRecipes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
