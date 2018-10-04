import React, { Component } from 'react'
import { addRecipe } from '../actions/recipe-actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.recipeNameChange = this.recipeNameChange.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  recipeNameChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async saveRecipe() {
    const { inputValue } = this.state;
    const { saveNewRecipe, history } = this.props;

    if (inputValue) {
      console.log("New recipe name: ", inputValue);
      await saveNewRecipe({ name: inputValue, ingredients: [] });
      toast.success(`${inputValue} added to Cook Book!`);
      history.push('/');
    } else {
      console.log("Empty new recipe name - cannot save");
      toast.warn('Empty new recipe name - cannot save');
    }
  }

  render() {
    return (
      <div>
        <form action="action">
          <label htmlFor="new-recipe-name">New recipe name</label>
          <input type="text" name="new-recipe-name" onChange={this.recipeNameChange} />
          <button type="button" className="button" onClick={this.saveRecipe}>Save!</button>
        </form>
      </div>
    )
  }
}

const mapDispathcToProps = (dispatch) => {
  return { saveNewRecipe: (newRecipe) => dispatch(addRecipe(newRecipe)) };
};

export default connect(null, mapDispathcToProps)(NewRecipe);