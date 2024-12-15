import React from "react";

function RecipeDetail({ recipe, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Modal Content */}
      <div
        style={{
          backgroundColor: "#f3f5ef",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          padding: "30px",
          width: "80%",
          maxWidth: "800px",
          overflowY: "auto",
          maxHeight: "90%",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "#E74C3C",
            color: "#FFF",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close
        </button>

        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />

        {/* Recipe Title */}
        <h2 style={{ color: "#333", marginBottom: "15px" }}>{recipe.title}</h2>
        <p style={{ color: "#777", marginBottom: "10px" }}>
          Source: {recipe.source}
        </p>
        <p style={{ color: "#777", marginBottom: "20px" }}>
          Rating: ⭐ {recipe.rating}
        </p>

        {/* Ingredients Section */}
        <h3 style={{ color: "#4CAF50", marginBottom: "10px" }}>Ingredients</h3>
        <ul style={{ marginBottom: "20px", color: "#555" }}>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available.</li>
          )}
        </ul>

        {/* Instructions Section */}
        <h3 style={{ color: "#4CAF50", marginBottom: "10px" }}>Instructions</h3>
        <p style={{ color: "#555" }}>
          {recipe.instructions
            ? recipe.instructions
            : "No instructions available."}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;