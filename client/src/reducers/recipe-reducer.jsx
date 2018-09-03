import { GET_ALL_RECIPES, GET_RECIPE_BY_ID, SET_RATING_BY_ID, ITEMS_LOADING, ADD_NEW_RECIPE } from '../constants/recipe-constants';

const initialState = {
  recipes: [],
  selectedRecipe: null,
  loading: false,
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return { ...state, recipes: [...action.recipes], loading: false, selectedRecipe: null };
    case GET_RECIPE_BY_ID:
      return { ...state, selectedRecipe: action.selectedRecipe };
    case SET_RATING_BY_ID:
      return { ...state, recipes: [...state.recipes, action.updatedRecipe] };
    case ADD_NEW_RECIPE:
      return { ...state };
    case ITEMS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
