'use strict';
const Recipe = require('../models/recipe.model');

// Filter recipes
exports.filterRecipes = (req, res) => {
  const { dietaryRestrictions, ingredients, recipeType } = req.body;

  Recipe.filterRecipes(dietaryRestrictions, ingredients, recipeType, (err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error filtering recipes', error: err });
    }
    res.status(200).json(results);
  });
};

// Get all recipes
exports.getAllRecipes = (req, res) => {
  Recipe.getAll((err, recipes) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving recipes" });
    } else {
      res.status(200).json(recipes);
    }
  });
};

// Get a recipe by ID
exports.getRecipeById = (req, res) => {
  const { id } = req.params;
  Recipe.getById(id, (err, recipe) => {
    if (err) {
      res.status(500).send({ message: "Error retrieving recipe" });
    } else if (!recipe) {
      res.status(404).send({ message: "Recipe not found" });
    } else {
      res.status(200).json(recipe);
    }
  });
};

// Add a new recipe
exports.addRecipe = (req, res) => {
  const newRecipe = req.body;
  if (!newRecipe.name || !newRecipe.recipe_type) {
    return res.status(400).send({ message: "Name and recipe type are required" });
  }

  Recipe.create(newRecipe, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error adding recipe", error: err });
    } else {
      res.status(201).json({ id: result.insertId, ...newRecipe });
    }
  });
};

// Delete a recipe by ID
exports.deleteRecipe = (req, res) => {
  const { id } = req.params;
  Recipe.delete(id, (err) => {
    if (err) {
      res.status(500).send({ message: "Error deleting recipe" });
    } else {
      res.status(200).send({ message: "Recipe deleted successfully" });
    }
  });
};

// Update a recipe by ID
exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const updatedRecipe = req.body;

  Recipe.update(id, updatedRecipe, (err) => {
    if (err) {
      res.status(500).send({ message: "Error updating recipe" });
    } else {
      res.status(200).send({ message: "Recipe updated successfully" });
    }
  });
};
