const mongoose = require('mongoose');

const { Schema } = mongoose;

// * Create schema
const RecipeSchema = new Schema({
  name: {
    type: 'String',
    required: true,
  },
  rating: {
    type: 'Number',
    required: false,
    default: 0,
  },
  ingredients: {
    type: ['Mixed'],
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
