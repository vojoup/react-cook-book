import axios from 'axios';
import { GET_ALL_RECIPES, GET_RECIPE_BY_ID, SET_RATING_BY_ID, ITEMS_LOADING } from '../constants/recipe-constants';

export function setReciepsLoading() {
  return { type: ITEMS_LOADING };
}

export const getAllRecipes = () => dispatch => {
  dispatch(setReciepsLoading());
  axios
    .get('http://localhost:3001/api/recipes')
    .then(res => dispatch({ type: GET_ALL_RECIPES, recipes: res.data }))
    .catch(err => console.log(err));
};

// return { type: GET_RECIPE_BY_ID, selectedRecipe };
export const getRecipeByID = id => dispatch => {
  dispatch(setReciepsLoading());
  axios.get();
};

export function setRatingById(id, newRating) {
  const recipeToSetRating = allRecipes.recipes[id];
  recipeToSetRating.rating = newRating;

  return { type: SET_RATING_BY_ID, recipes: [...allRecipes, recipeToSetRating] };
}
