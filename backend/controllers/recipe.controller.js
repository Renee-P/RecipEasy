'use strict';
const Recipe = require('../models/recipe.model');

exports.filterRecipes = (req, res) => {
  const { dietaryRestrictions, ingredients, recipeType } = req.body;

  Recipe.filterRecipes(dietaryRestrictions, ingredients, recipeType, (err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error filtering recipes', error: err });
    }
    res.status(200).send(results);
  });
};


