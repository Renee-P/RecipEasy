import React, { useState } from "react";

function RecipeCard({ recipe }) {
  // State to track if the recipe is saved
  const [isSaved, setIsSaved] = useState(false);

  // Function to toggle the save status
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f5ef",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Recipe Information */}
      <div style={{ marginTop: "15px" }}>
        <h3 style={{ marginBottom: "10px", color: "#333" }}>{recipe.title}</h3>
        <p style={{ marginBottom: "5px", color: "#555" }}>
          Source: {recipe.source}
        </p>
        <p style={{ marginBottom: "10px", color: "#555" }}>
          Rating: ⭐ {recipe.rating}
        </p>
        <p
          style={{
            color: recipe.hasAllIngredients ? "#4CAF50" : "#F44336",
          }}
        >
          {recipe.hasAllIngredients
            ? "You have all ingredients!"
            : "Missing some ingredients"}
        </p>
      </div>

      {/* Toggleable Heart Icon */}
      <svg
        onClick={toggleSave}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          fill: isSaved ? "#E74C3C" : "none",
          stroke: "#E74C3C",
          strokeWidth: "2px",
          width: "30px",
          height: "30px",
          transition: "fill 0.3s",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
}

export default RecipeCard;
