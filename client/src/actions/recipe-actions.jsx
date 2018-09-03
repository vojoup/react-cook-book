import axios from 'axios';
import { GET_ALL_RECIPES, GET_RECIPE_BY_ID, SET_RATING_BY_ID, ITEMS_LOADING, ADD_NEW_RECIPE } from '../constants/recipe-constants';

export function setReciepsLoading() {
  return { type: ITEMS_LOADING };
}

export const getAllRecipes = () => dispatch => {
  dispatch(setReciepsLoading());
  axios
    .get('/api/recipes')
    .then(res => dispatch({ type: GET_ALL_RECIPES, recipes: res.data }))
    .catch(err => console.log(err));
};

// return { type: GET_RECIPE_BY_ID, selectedRecipe };
export const getRecipeByID = id => dispatch => {
  dispatch(setReciepsLoading());
  axios.get(`/api/recipes/${id}`).then(recipe => {
    dispatch({ type: GET_RECIPE_BY_ID, selectedRecipe: recipe.data });
  });
};

export const setRatingById = (id, newRating) => dispatch => {
  axios
    .patch(`/api/recipes/${id}`, {
      newRating,
    })
    .then(res => {
      console.log(res);
      dispatch({ type: SET_RATING_BY_ID, updatedRecipe: res });
    });
};

export const addRecipe = (newRecipe) => dispatch => {
  axios
    .post('/api/recipes', { ...newRecipe })
    .then(res => {
      console.log("Added a new recipe", newRecipe);
      dispatch({ type: ADD_NEW_RECIPE });
    })
}

// export const deleteRecipeByID = id => dispatch => {
//   axios.delete(`/api/recipes/${id}`).then(res => console.log(res));
// };
