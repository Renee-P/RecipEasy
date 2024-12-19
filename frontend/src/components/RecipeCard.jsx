import React, { useState } from "react";

function RecipeCard({ recipe, onOpenDetail }) {
  return (
    <div
      style={{
        backgroundColor: "#f3f5ef",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => onOpenDetail(recipe)}
    >
      <img
        src={recipe.image || "../../public/logo.svg"}
        alt={recipe.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "15px" }}>
        <h3 style={{ marginBottom: "10px", color: "#333" }}>{recipe.name}</h3>
        <p style={{ marginBottom: "5px", color: "#555" }}>
          Type: {recipe.recipe_type || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
