import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';

import { getRecipeByID, setRatingById } from '../actions/recipe-actions';
import Ingredients from './ingredients';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  componentWillMount() {
    const { getRecipeInfo, match } = this.props;

    getRecipeInfo(+match.params.id);
  }

  handleRatingChange(newRating) {
    const { setNewRating, match } = this.props;

    setNewRating(+match.params.id, newRating);

    console.log(this.props);
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
                <ReactStars value={recipe.rating} onChange={this.handleRatingChange} />
              </span>
            </h2>
            <Ingredients ingredients={recipe.ingredients} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
