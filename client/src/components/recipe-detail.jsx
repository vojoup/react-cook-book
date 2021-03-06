import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';

import { getRecipeByID, setRatingById, deleteRecipeByID } from '../actions/recipe-actions';
import Ingredients from './ingredients';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    const { getRecipeInfo, match } = this.props;

    getRecipeInfo(match.params.id);
  }

  handleRatingChange(newRating) {
    const { setNewRating, match } = this.props;

    setNewRating(match.params.id, newRating);
  }

  async deleteRecipe() {
    console.log('Delete recipe!!!!!');
    const { deleteRecipe, recipe, history } = this.props;
    await deleteRecipe(recipe._id);
    history.push('/');
  }

  render() {
    const { recipe } = this.props;

    return (
      <div>
        {recipe && (
          <div>
            <h2>
              {recipe.name}{' '}
              <span className="rating">
                <ReactStars
                  value={recipe.rating}
                  color1="#CD9FCC"
                  color2="#0A014F"
                  onChange={this.handleRatingChange}
                />
              </span>
            </h2>
            <Ingredients ingredients={recipe.ingredients} />
            <button type="button" onClick={this.deleteRecipe} title="Delete this recipe?">
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ recipe: state.selectedRecipe });

const mapDispatchToProps = dispatch => ({
  getRecipeInfo: id => dispatch(getRecipeByID(id)),
  setNewRating: (id, newRating) => dispatch(setRatingById(id, newRating)),
  deleteRecipe: id => dispatch(deleteRecipeByID(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
