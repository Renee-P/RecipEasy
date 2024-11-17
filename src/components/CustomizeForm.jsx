import React, { useState } from "react";
import "./CustomizeForm.css";

function CustomizeForm() {
  const [customRestrictions, setCustomRestrictions] = useState("");
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [recipeType, setRecipeType] = useState("");

  const dietaryOptions = [
    "Vegan",
    "Vegetarian",
    "Gluten-Free",
    "Dairy-Free",
    "Nut-Free",
    "Soy-Free",
  ];

  const ingredientsOptions = [
    "Chicken",
    "Beef",
    "Carrot",
    "Tomato",
    "Lettuce",
    "Egg",
    "Rice",
    "Cheese",
    "Garlic",
    "Onion",
    "Potato",
    "Spinach",
    "Olive Oil",
  ];

  const recipeTypes = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Dessert",
    "Appetizer",
  ];

  const handleCheckboxChange = (option, type) => {
    if (type === "restriction") {
      if (selectedRestrictions.includes(option)) {
        setSelectedRestrictions(
          selectedRestrictions.filter((item) => item !== option)
        );
      } else {
        setSelectedRestrictions([...selectedRestrictions, option]);
      }
    } else if (type === "ingredient") {
      if (selectedIngredients.includes(option)) {
        setSelectedIngredients(
          selectedIngredients.filter((item) => item !== option)
        );
      } else {
        setSelectedIngredients([...selectedIngredients, option]);
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#EEEEEE",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderBottomRightRadius: "20px",
      }}
    >
      {/* Title */}
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "0 0 15px 15px",
          marginBottom: "20px",
        }}
      >
        <h4 style={{ fontSize: "2em", textAlign: "center", color: "#789F52" }}>
          Customize Your Recipes
        </h4>
      </div>

      {/* Scrollable Content Area */}
      <div
        style={{
          flex: 1,
          // overflowY: "auto",
        }}
      >
        {/* Restrictions */}
        <div className="section">
          {/* Checklist for Dietary Restrictions */}
          <div className="section" style={{ marginBottom: "20px" }}>
            <h5 style={{ color: "#789F52" }}>Dietary Restrictions</h5>
            <div
              className="grid-container" // Use the grid-container class here
              style={{
                marginBottom: "20px",
              }}
            >
              {dietaryOptions.map((option) => (
                <div
                  key={option}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedRestrictions.includes(option)}
                    onChange={() => handleCheckboxChange(option, "restriction")}
                    style={{ marginRight: "10px" }}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar for Custom Dietary Restrictions */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#789F52",
                marginBottom: "10px",
              }}
            >
              Custom Restrictions
            </label>
            <input
              type="text"
              placeholder="Enter custom restrictions"
              value={customRestrictions}
              onChange={(e) => setCustomRestrictions(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="section">
          {/* Checklist for Ingredients */}
          <div style={{ marginBottom: "20px" }}>
            <h5 style={{ color: "#789F52" }}>Ingredients You Have</h5>
            <div
              className="grid-container" // Use the grid-container class here
              style={{
                marginBottom: "20px",
              }}
            >
              {ingredientsOptions.map((ingredient) => (
                <div
                  key={ingredient}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() =>
                      handleCheckboxChange(ingredient, "ingredient")
                    }
                    style={{ marginRight: "10px" }}
                  />
                  <label>{ingredient}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Input for Custom Ingredients */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#789F52",
                marginBottom: "10px",
              }}
            >
              Custom Ingredients
            </label>
            <input
              type="text"
              placeholder="Enter custom ingredients"
              value={ingredientsInput}
              onChange={(e) => setIngredientsInput(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Recipe Type Dropdown */}
        <div className="section" style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", color: "#789F52", marginBottom: "10px" }}
          >
            Recipe Type
          </label>
          <select
            value={recipeType}
            onChange={(e) => setRecipeType(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select a type</option>
            {recipeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#789F52",
              color: "#FFFFFF",
              fontSize: "1.2em",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Find Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizeForm;
