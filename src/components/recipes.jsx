import React, { Component } from 'react';
import Grid from 'react-css-grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllRecipes } from '../actions/recipe-actions';
import Spinner from './spinner';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { getRecipes } = this.props;

    this.setState({ loading: true });
    setTimeout(() => {
      getRecipes();
      this.setState({ loading: false });
    }, 2000);
  }

  renderRecipes() {
    const { recipes } = this.props;
    const recipesList = recipes.map((recipe, i) => {
      const style = { backgroundImage: `url(${recipe.pathToImage})` };
      return (
        <Link to={`/recipe/${i}`} key={i}>
          <li className="recipe-item" style={style}>
            <h3>{recipe.name}</h3>
          </li>
        </Link>
      );
    });

    return recipesList;
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
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
