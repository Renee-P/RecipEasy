'use strict';

module.exports = (app) => {
  const recipeController = require('../controllers/recipe.controller');

  app.post('/recipes/filter', recipeController.filterRecipes);
  
};
