'use strict';
const dbConn = require('../config/db.config');

class Recipe {
  static filterRecipes(dietaryRestrictions, ingredients, recipeType, callback) {
    let query = 'SELECT * FROM recipes WHERE 1=1';
    const params = [];
  
    if (dietaryRestrictions.length) {
      query += ' AND (';
      dietaryRestrictions.forEach((restriction, index) => {
        query += `FIND_IN_SET(?, dietary_restrictions) > 0`;
        if (index < dietaryRestrictions.length - 1) query += ' OR ';
        params.push(restriction);
      });
      query += ')';
    }
  
    if (ingredients.length) {
      query += ' AND (';
      ingredients.forEach((ingredient, index) => {
        query += `ingredients LIKE ?`;
        if (index < ingredients.length - 1) query += ' OR ';
        params.push(`%${ingredient}%`);
      });
      query += ')';
    }
  
    if (recipeType) {
      query += ' AND recipe_type = ?';
      params.push(recipeType);
    }
  
    dbConn.query(query, params, callback);

    console.log('SQL Query:', query);
    console.log('Params:', params);
  }  
}

module.exports = Recipe;

