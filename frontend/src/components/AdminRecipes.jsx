import React, { useState, useEffect } from "react";
import "./Admin.css";

function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    ingredients: "",
    dietary_restrictions: "",
    recipe_type: "",
    instructions: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);

  // Fetch recipes from the backend
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        alert("Failed to fetch recipes. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      fetch(`http://localhost:5000/recipes/${id}`, { method: "DELETE" })
        .then(() => {
          setRecipes(recipes.filter((recipe) => recipe.id !== id));
          alert("Recipe successfully deleted!");
        })
        .catch((error) => {
          console.error("Error deleting recipe:", error);
          alert("Failed to delete recipe. Please try again later.");
        });
    }
  };

  const handleAddRecipe = () => {
    const { name, recipe_type } = newRecipe;

    if (name && recipe_type) {
      fetch("http://localhost:5000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      })
        .then((response) => response.json())
        .then((addedRecipe) => {
          setRecipes([...recipes, addedRecipe]);
          setNewRecipe({
            name: "",
            image: "",
            ingredients: "",
            dietary_restrictions: "",
            recipe_type: "",
            instructions: "",
          });
          setIsModalOpen(false);
          alert("Recipe successfully added!");
        })
        .catch((error) => {
          console.error("Error adding recipe:", error);
          alert("Failed to add recipe. Please try again later.");
        });
    } else {
      alert("Please fill out required fields (name and recipe type)");
    }
  };

  const handleEditRecipe = () => {
    fetch(`http://localhost:5000/recipes/${editRecipe.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editRecipe),
    })
      .then((response) => response.json())
      .then((updatedRecipe) => {
        setRecipes(
          recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          )
        );
        setEditRecipe(null);
        setIsModalOpen(false);
        alert("Recipe successfully edited!");
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
        alert("Failed to update recipe. Please try again later.");
      });
  };

  const openEditModal = (recipe) => {
    setEditRecipe(recipe);
    setIsModalOpen(true);

    // Scroll to the edit form
    setTimeout(() => {
      const editForm = document.getElementById("form-bg");
      if (editForm) {
        editForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditRecipe(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editRecipe) {
      setEditRecipe({ ...editRecipe, [name]: value });
    } else {
      setNewRecipe({ ...newRecipe, [name]: value });
    }
  };

  return (
    <div className="content">
      <h1 style={{ display: "inline-block" }}>Recipes</h1>
      <button
        className="btn btn-primary"
        style={{
          display: "inline-block",
          marginLeft: "10px",
          marginBottom: "10px",
          backgroundColor: "rgb(248, 116, 31)",
          border: "none",
          fontSize: "1.3rem",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Add Recipe
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="form-bg"
          style={{
            backgroundColor: "white",
            marginTop: "10px",
            marginBottom: "15px",
            padding: "20px",
            borderRadius: "20px",
            paddingTop: "10px",
          }}
        >
          <div className="form-div">
            <form id="form" onSubmit={(e) => e.preventDefault()}>
              <h2
                style={{
                  color: "rgb(120, 159, 82)",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                {editRecipe ? "Edit Recipe" : "Add Recipe"}
              </h2>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-2"
                name="name"
                value={editRecipe ? editRecipe.name : newRecipe.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                className="form-control mb-2"
                name="image"
                value={editRecipe ? editRecipe.image : newRecipe.image}
                onChange={handleChange}
              />
              <textarea
                placeholder="Ingredients"
                className="form-control mb-2"
                name="ingredients"
                value={
                  editRecipe ? editRecipe.ingredients : newRecipe.ingredients
                }
                onChange={handleChange}
              />
              <textarea
                placeholder="Dietary Restrictions"
                className="form-control mb-2"
                name="dietary_restrictions"
                value={
                  editRecipe
                    ? editRecipe.dietary_restrictions
                    : newRecipe.dietary_restrictions
                }
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Recipe Type"
                className="form-control mb-2"
                name="recipe_type"
                value={
                  editRecipe ? editRecipe.recipe_type : newRecipe.recipe_type
                }
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Instructions"
                className="form-control mb-2"
                name="instructions"
                value={
                  editRecipe ? editRecipe.instructions : newRecipe.instructions
                }
                onChange={handleChange}
              />
              <div className="form-buttons">
                {editRecipe ? (
                  <>
                    <input
                      type="button"
                      id="submit"
                      className="btn btn-secondary btn-sm me-2"
                      value="Update"
                      style={{
                        backgroundColor: "green",
                        border: "none",
                        fontSize: "1.1rem",
                        marginTop: "5px",
                      }}
                      onClick={handleEditRecipe}
                    />
                    <button
                      id="close"
                      type="button"
                      style={{
                        backgroundColor: "gray",
                        border: "none",
                        fontSize: "1.1rem",
                        marginTop: "5px",
                      }}
                      className="btn btn-secondary btn-sm"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="button"
                      id="Add"
                      style={{
                        backgroundColor: "green",
                        border: "none",
                        fontSize: "1.1rem",
                        marginTop: "5px",
                      }}
                      className="btn btn-secondary btn-sm me-2"
                      value="Submit"
                      onClick={handleAddRecipe}
                    />
                    <button
                      id="close"
                      type="button"
                      style={{
                        backgroundColor: "gray",
                        border: "none",
                        fontSize: "1.1rem",
                        marginTop: "5px",
                      }}
                      className="btn btn-secondary btn-sm"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      <table>
        <thead
          style={{
            color: "rgb(109, 142, 75)",
          }}
        >
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Ingredients</th>
            <th>Dietary Restrictions</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody
          style={{
            color: "white",
            backgroundColor: "rgb(109, 142, 75)",
          }}
        >
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.recipe_type}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.dietary_restrictions}</td>
              <td>{recipe.instructions}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => openEditModal(recipe)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(recipe.id)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminRecipes;
