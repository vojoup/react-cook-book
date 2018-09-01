import { GET_ALL_RECIPES, GET_RECIPE_BY_ID } from '../constants/recipe-constants';

const allRecipes = {
  recipes: [
    { name: 'Hamburger', ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }], rating: 4.5 },
    {
      name: 'Spaggetti',
      ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
      rating: 4.9999,
    },
    {
      name: 'Kus-kus',
      ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
      rating: 4.5,
    },
    { name: 'Hamburger', ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }], rating: 4.5 },
    {
      name: 'Spaggetti',
      ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
      rating: 4.9999,
    },
    {
      name: 'Kus-kus',
      ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
      rating: 4.5,
    },
  ],
  selectedRecipeID: null,
};

export function getAllRecipes() {
  return { type: GET_ALL_RECIPES, recipes: allRecipes.recipes };
}

export function getRecipeByID(id) {
  const selectedRecipe = allRecipes.recipes[id];
  return { type: GET_RECIPE_BY_ID, selectedRecipe };
}
