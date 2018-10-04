import React, { Component } from 'react'
import { addRecipe } from '../actions/recipe-actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import ReactStars from 'react-stars';


import '../css/new-recipe.css';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      rating: 0,
    };

    this.recipeNameChange = this.recipeNameChange.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  recipeNameChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async saveRecipe() {
    const { inputValue } = this.state;
    const { saveNewRecipe, history } = this.props;

    if (inputValue) {
      const { rating } = this.state;

      console.log("New recipe rating: ", rating);

      await saveNewRecipe({ name: inputValue, ingredients: [], rating });
      history.push('/');
    } else {
      toast.warn('Please enter a name for your recipe.');
    }
  }

  handleRatingChange(rating) {
    this.setState({ rating });
  }

  ingredients() {

  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <form action="action" className="new-recipe-form">
          {/* <label htmlFor="new-recipe-name">Name:</label> */}
          <input placeholder="Recipe name" type="text" name="new-recipe-name" onChange={this.recipeNameChange} className="new-recipe-input" />
          {this.ingredients()}
          <span className="rating">
            <ReactStars
              value={rating}
              color1="#CD9FCC"
              color2="#0A014F"
              onChange={this.handleRatingChange}
            />
          </span>
          <button type="button" className="button submit" onClick={this.saveRecipe}>Save!</button>
        </form>
      </div>
    )
  }
}

const mapDispathcToProps = (dispatch) => {
  return { saveNewRecipe: (newRecipe) => dispatch(addRecipe(newRecipe)) };
};

export default connect(null, mapDispathcToProps)(NewRecipe);