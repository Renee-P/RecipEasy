import React, { useState } from "react";
import "./CustomizeForm.css";

function CustomizeForm() {
  const [customRestrictions, setCustomRestrictions] = useState("");
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [recipeType, setRecipeType] = useState("");

  const [customRestrictionsList, setCustomRestrictionsList] = useState([]);
  const [customIngredientsList, setCustomIngredientsList] = useState([]);

  // State to manage collapse for each section
  const [isDietaryOpen, setIsDietaryOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isRecipeTypeOpen, setIsRecipeTypeOpen] = useState(false);

  //state to show results after clicking find recipes button
  const [showResults, setShowResults] = useState(false);

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
    "All",
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

  // Handler for adding custom restrictions
  const handleAddCustomRestriction = () => {
    if (
      customRestrictions &&
      !customRestrictionsList.includes(customRestrictions)
    ) {
      setCustomRestrictionsList([
        ...customRestrictionsList,
        customRestrictions,
      ]);
      setCustomRestrictions("");
    }
  };

  // Handler for deleting custom restrictions
  const handleDeleteCustomRestriction = (restriction) => {
    setCustomRestrictionsList(
      customRestrictionsList.filter((item) => item !== restriction)
    );
  };

  // Handler for adding custom ingredients
  const handleAddCustomIngredient = () => {
    if (ingredientsInput && !customIngredientsList.includes(ingredientsInput)) {
      setCustomIngredientsList([...customIngredientsList, ingredientsInput]);
      setIngredientsInput("");
    }
  };

  // Handler for deleting custom ingredients
  const handleDeleteCustomIngredient = (ingredient) => {
    setCustomIngredientsList(
      customIngredientsList.filter((item) => item !== ingredient)
    );
  };

  const handleSearch = () => {
    // Collect all selected options
    const selectedData = {
      dietaryRestrictions: selectedRestrictions.concat(customRestrictionsList),
      ingredients: selectedIngredients.concat(customIngredientsList),
      recipeType: recipeType,
    };

    // Log selected data (or make an API call here)
    console.log("Applying filters with data:", selectedData);

    // Set showResults to true to display the results
    setShowResults(true);
  };

  const handleClear = () => {
    // Reset all selections to initial state
    setSelectedRestrictions([]);
    setCustomRestrictionsList([]);
    setSelectedIngredients([]);
    setCustomIngredientsList([]);
    setRecipeType("");
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f5ef",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        boxShadow: "-4px 0 rgba(0,0,0,0.1) inset",
      }}
    >
      {/* Title */}
      <div
        style={{
          backgroundColor: "#789F52",
          padding: "10px",
          borderRadius: "0 0 15px 15px",
          boxShadow: "-4px 0 rgba(0,0,0,0.1) inset",
        }}
      >
        <h4 style={{ fontSize: "2em", textAlign: "center", color: "#f3f5ef" }}>
          Customize Your Recipes
        </h4>
      </div>

      {/* Scrollable Content Area */}
      <div
        style={{
          flex: 1,
        }}
      >
        {/* Dietary Restrictions Section */}
        <div className="section">
          <h4
            style={{ color: "#f3f5ef", cursor: "pointer" }}
            onClick={() => setIsDietaryOpen(!isDietaryOpen)}
          >
            Dietary Restrictions{" "}
            <svg
              className={`dropdown-icon ${isDietaryOpen ? "open" : "closed"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: "20px", marginLeft: "10px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#f3f5ef"
              ></path>
            </svg>
          </h4>
          {isDietaryOpen && (
            <div className="pad">
              <div className="grid-container">
                {dietaryOptions.map((option) => (
                  <div
                    key={option}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRestrictions.includes(option)}
                      onChange={() =>
                        handleCheckboxChange(option, "restriction")
                      }
                      style={{ marginRight: "10px" }}
                    />
                    <label style={{ color: "#f3f5ef" }}>{option}</label>
                  </div>
                ))}
              </div>

              {/* Search Bar for Custom Dietary Restrictions */}
              <div className="pad">
                <label
                  style={{
                    display: "block",
                    color: "#f3f5ef",
                    marginBottom: "5px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginTop: "10px",
                  }}
                >
                  Custom Restrictions
                </label>

                {/* Container for input and button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter custom restrictions"
                    value={customRestrictions}
                    onChange={(e) => setCustomRestrictions(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddCustomRestriction()
                    }
                    style={{
                      flex: "1",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      marginRight: "10px",
                    }}
                  />
                  <button
                    style={{
                      backgroundColor: "#F8741F",
                      border: "none",
                      padding: "3px 7px",
                      fontSize: "1.2rem",
                      borderRadius: "5px",
                      cursor: "pointer",
                      color: "#f3f5ef",
                      fontWeight: "bold",
                    }}
                    onClick={handleAddCustomRestriction}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Displaying Custom Restrictions */}
              <div className="custom-list">
                {customRestrictionsList.map((restriction, index) => (
                  <div key={index} className="custom-item">
                    <span className="cust-item-css">
                      {restriction}
                      <button
                        className="del-custom"
                        onClick={() =>
                          handleDeleteCustomRestriction(restriction)
                        }
                      >
                        x
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ingredients Section */}
        <div className="section">
          <h4
            style={{ color: "#f3f5ef", cursor: "pointer" }}
            onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
          >
            Ingredients You Have{" "}
            <svg
              className={`dropdown-icon ${
                isIngredientsOpen ? "open" : "closed"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: "20px", marginLeft: "10px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#f3f5ef"
              ></path>
            </svg>
          </h4>
          {isIngredientsOpen && (
            <div className="pad">
              <div className="grid-container">
                {ingredientsOptions.map((option) => (
                  <div
                    key={option}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedIngredients.includes(option)}
                      onChange={() =>
                        handleCheckboxChange(option, "ingredient")
                      }
                      style={{ marginRight: "10px" }}
                    />
                    <label style={{ color: "#f3f5ef" }}>{option}</label>
                  </div>
                ))}
              </div>

              {/* Search Bar for Custom Ingredients */}
              <div className="pad">
                <label
                  style={{
                    display: "block",
                    color: "#f3f5ef",
                    marginBottom: "5px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginTop: "10px",
                  }}
                >
                  Custom Ingredients
                </label>

                {/* Container for input and button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter custom ingredients"
                    value={ingredientsInput}
                    onChange={(e) => setIngredientsInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddCustomIngredient()
                    }
                    style={{
                      flex: "1",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      marginRight: "10px",
                    }}
                  />
                  <button
                    style={{
                      backgroundColor: "#F8741F",
                      border: "none",
                      padding: "3px 7px",
                      fontSize: "1.2rem",
                      borderRadius: "5px",
                      cursor: "pointer",
                      color: "#f3f5ef",
                      fontWeight: "bold",
                    }}
                    onClick={handleAddCustomIngredient}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Displaying Custom Ingredients */}
              <div className="custom-list">
                {customIngredientsList.map((ingredient, index) => (
                  <div key={index} className="custom-item">
                    <span className="cust-item-css">
                      {ingredient}
                      <button
                        className="del-custom"
                        onClick={() => handleDeleteCustomIngredient(ingredient)}
                      >
                        x
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recipe Type Section */}
        <div className="section">
          <h4
            style={{ color: "#f3f5ef", cursor: "pointer" }}
            onClick={() => setIsRecipeTypeOpen(!isRecipeTypeOpen)}
          >
            Recipe Type{" "}
            <svg
              className={`dropdown-icon ${
                isRecipeTypeOpen ? "open" : "closed"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: "20px", marginLeft: "10px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#f3f5ef"
              ></path>
            </svg>
          </h4>
          {isRecipeTypeOpen && (
            <div className="pad">
              <div className="grid-container">
                {recipeTypes.map((type) => (
                  <div
                    key={type}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      type="radio"
                      name="recipeType"
                      checked={recipeType === type}
                      onChange={() => setRecipeType(type)}
                      style={{ marginRight: "10px" }}
                    />
                    <label style={{ color: "#f3f5ef" }}>{type}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Apply & Cancel Button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            backgroundColor: "#ccc",
            color: "#333",
            border: "none",
            padding: "10px 20px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          style={{
            backgroundColor: "#F8741F",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            margin: "10px",
            cursor: "pointer",
            marginRight: "15px",
            marginLeft: "0px",
          }}
          onClick={handleSearch}
        >
          Find Recipes
        </button>
      </div>
    </div>
  );
}

export default CustomizeForm;
