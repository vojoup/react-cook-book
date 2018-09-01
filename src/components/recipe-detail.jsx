import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipeByID } from '../actions/recipe-actions';
import Ingredients from './ingredients';

class RecipeDetail extends Component {
  componentWillMount() {
    const { getRecipeInfo } = this.props;
    const { match } = this.props;

    getRecipeInfo(+match.params.id);
  }

  render() {
    const { recipe } = this.props;

    console.log('recipe:', recipe);

    return (
      <div>
        {recipe && (
          <div>
            <h2>{recipe.name}</h2> <Ingredients ingredients={recipe.ingredients} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ recipe: state.selectedRecipe });

const mapDispatchToProps = dispatch => ({
  getRecipeInfo: id => dispatch(getRecipeByID(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
