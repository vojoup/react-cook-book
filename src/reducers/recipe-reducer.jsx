import { GET_ALL_RECIPES, GET_RECIPE_BY_ID } from '../constants/recipe-constants';

const initialState = {
  recipes: [],
  selectedRecipe: null,
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return { ...state, recipes: [...action.recipes], selectedRecipe: null };
    case GET_RECIPE_BY_ID:
      return { ...state, selectedRecipe: action.selectedRecipe };
    default:
      return state;
  }
}
