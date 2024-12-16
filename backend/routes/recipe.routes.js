'use strict';

module.exports = (app) => {
  const recipeController = require('../controllers/recipe.controller');

  app.post('/recipes/filter', recipeController.filterRecipes);

  // GET all recipes
  app.get("/recipes", recipeController.getAllRecipes);

  // GET a single recipe by ID
  app.get("/recipes/:id", recipeController.getRecipeById);

  // POST a new recipe
  app.post("/recipes", recipeController.addRecipe);

  // DELETE a recipe by ID
  app.delete("/recipes/:id", recipeController.deleteRecipe);

  // PUT (or PATCH) to update a recipe by ID
  app.put("/recipes/:id", recipeController.updateRecipe);
  
};
