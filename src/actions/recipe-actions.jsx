import { GET_ALL_RECIPES, GET_RECIPE_BY_ID, SET_RATING_BY_ID } from '../constants/recipe-constants';

const assetsPath = '../assets';

const allRecipes = {
  recipes: [
    {
      name: 'Hamburger',
      ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }],
      pathToImage: `${assetsPath}/burger.png`,
      rating: 4,
    },
    {
      name: 'Spaggetti',
      ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
      pathToImage: `${assetsPath}/spageti.jpg`,
      rating: 3,
    },
    {
      name: 'Kus-kus',
      ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
      pathToImage: `${assetsPath}/kuskus.jpg`,
      rating: 4,
    },
    {
      name: 'Hamburger',
      ingredients: [{ name: 'bun', amount: 1 }, { name: 'meat', amount: 1 }],
      pathToImage: `${assetsPath}/burger.png`,
      rating: 2,
    },
    {
      name: 'Spaggetti',
      ingredients: [{ name: 'spaggetti', amount: 1 }, { name: 'tomatoes', amount: 6 }],
      pathToImage: `${assetsPath}/spageti.jpg`,
      rating: 5,
    },
    {
      name: 'Kus-kus',
      ingredients: [{ name: 'kus-kus', amount: 1 }, { name: 'bell pepper', amount: 1 }],
      pathToImage: `${assetsPath}/kuskus.jpg`,
      rating: 1,
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

export function setRatingById(id, newRating) {
  const recipeToSetRating = allRecipes.recipes[id];
  recipeToSetRating.rating = newRating;

  return { type: SET_RATING_BY_ID, recipes: [...allRecipes, recipeToSetRating] };
}
