const express = require('express');

const router = express.Router();

// * Recipe model
const RecipeSchema = require('../../models/recipe');

/**
 * Get all recipes
 * @route GET api/recipes
 */
router.get('/', (req, res) => {
  RecipeSchema.find()
    .sort({ name: 1 })
    .then(recipes => res.json(recipes));
});

/**
 * Add a new recipe
 * @route POST api/recipes
 */
router.post('/', (req, res) => {
  const newRecipe = new RecipeSchema({
    name: req.body.name,
    ingredients: req.body.ingredients,
  });

  newRecipe.save().then(recipe => res.json(recipe));
});

/**
 * Deletes a recipe by ID
 * @route DELETE api/recipes/:id
 */
router.delete('/:id', (req, res) => {
  RecipeSchema.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({ success: true, message: 'Item succesfuly deleted!' })))
    .catch(err => {
      res.status(400).json({ success: false, message: 'Item not found!' });
    });
});

/**
 * Sets the ratingof a recipe by ID
 * @route PATCH api/recipes/:id
 */
router.patch('/:id', (req, res) => {
  RecipeSchema.findById(req.params.id)
    .then(recipe => {
      recipe.rating = req.body.newRating;
      recipe.save().then(() => res.json({ success: true, message: 'Rating updated!' }));
    })
    .catch(err => {
      res.status(400).json({ success: false, message: 'Item not found!' });
    });
});

module.exports = router;
