import React, { useState, useEffect } from "react";
import "./Admin.css";

function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      fetch(`/api/recipes/${id}`, { method: "DELETE" }).then(() =>
        setRecipes(recipes.filter((r) => r.id !== id))
      );
    }
  };

  return (
    <div className="content">
      <h1>Recipes</h1>
      <button onClick={() => alert("Add Recipe")}>Add Recipe</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.description}</td>
              <td>{recipe.category}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminRecipes;
