import React, { Component } from 'react';
import Grid from 'react-css-grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllRecipes } from '../actions/recipe-actions';
import Spinner from './spinner';

class Recipes extends Component {
  componentDidMount() {
    const { getRecipes } = this.props;

    getRecipes();
  }

  renderRecipes() {
    const { recipes } = this.props;

    const recipesList = recipes.map((recipe, i) => {
      const style = { backgroundImage: `url(${recipe.pathToImage})` };
      return (
        <Link to={`/recipe/${recipe._id}`} key={i}>
          <li className="recipe-item tile" style={style}>
            <h3>{recipe.name}</h3>
          </li>
        </Link>
      );
    });

    recipesList.push(
      <Link to={`/newRecipe`} key={recipesList.length + 1}>
        <li className="recipe-item new-recipe">
          <h3>Add a new recipe</h3>
        </li>
      </Link>
    );

    return recipesList;
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return <Grid>{this.renderRecipes()}</Grid>;
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getAllRecipes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
