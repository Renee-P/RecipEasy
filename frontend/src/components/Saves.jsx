import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample saved recipes for demonstration. Replace this with actual API calls or local storage logic.
const sampleSavedRecipes = [
  { id: 1, name: "Recipe 1", description: "Description of Recipe 1" },
  { id: 2, name: "Recipe 2", description: "Description of Recipe 2" },
  { id: 3, name: "Recipe 3", description: "Description of Recipe 3" },
];

function Saves() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // This could be replaced with an API call or fetching from localStorage
  useEffect(() => {
    // Simulate fetching saved recipes (replace with actual fetch or storage logic)
    setSavedRecipes(sampleSavedRecipes);
  }, []);

  const handleRemoveRecipe = (id) => {
    // Logic to remove the recipe from saved list
    setSavedRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#E6EADD",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/home">
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </Link>
        <h1
          style={{
            marginLeft: "8px", // Adds spacing between the icon and the heading
            marginBottom: "0", // Removes bottom margin to keep it aligned with the icon
          }}
        >
          My Saved Recipes
        </h1>
      </div>
      <div style={{ marginTop: "20px" }}>
        {savedRecipes.length === 0 ? (
          <p>No saved recipes yet. Go ahead and save some recipes!</p>
        ) : (
          <ul>
            {savedRecipes.map((recipe) => (
              <li key={recipe.id} style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                  <button
                    onClick={() => handleRemoveRecipe(recipe.id)}
                    style={{
                      backgroundColor: "#FF6347",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Saves;
