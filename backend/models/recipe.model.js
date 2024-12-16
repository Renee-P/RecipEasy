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

  static getAll(callback) {
    const query = 'SELECT * FROM recipes';
    dbConn.query(query, callback);
  }

  static getById(id, callback) {
    const query = 'SELECT * FROM recipes WHERE id = ?';
    dbConn.query(query, [id], callback);
  }

  static create(newRecipe, callback) {
    const query = 'INSERT INTO recipes SET ?';
    dbConn.query(query, newRecipe, callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM recipes WHERE id = ?';
    dbConn.query(query, [id], callback);
  }

  static update(id, updatedRecipe, callback) {
    const query = 'UPDATE recipes SET ? WHERE id = ?';
    dbConn.query(query, [updatedRecipe, id], callback);
  }
}

module.exports = Recipe;

