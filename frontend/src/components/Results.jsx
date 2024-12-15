import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

// Sample placeholder data
const sampleRecipes = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/e8/56/e5/e856e58e65335b060e8988defc198c26.jpg",
    name: "Spaghetti Carbonara",
    source: "AllRecipes",
    hasAllIngredients: true,
    ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Pepper"],
    instructions: "Cook spaghetti. Fry bacon. Mix with eggs and cheese.",
  },
  {
    id: 2,
    image: "/piz.jpg",
    name: "Vegetarian Pizza",
    hasAllIngredients: false,
  },
  {
    id: 3,
    image: "/cok.webp",
    name: "Chicken Alfredo",
    hasAllIngredients: true,
  },
  {
    id: 4,
    image: "./cok2.webp",
    name: "Tacos",
    hasAllIngredients: false,
  },
];

function Results() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle opening the detailed view
  const openRecipeDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to close the detailed view
  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  const hasRecipes = sampleRecipes.length > 0;

  return (
    <div
      style={{
        padding: "22px",
        paddingLeft: "30px",
        backgroundColor: "#789F52",
        height: "100%",
        boxSizing: "border-box",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "1.8em",
          color: "#FFF",
          marginBottom: "20px",
        }}
      >
        {hasRecipes &&
          `You can make ${sampleRecipes.length} recipe${
            sampleRecipes.length > 1 ? "s" : ""
          }!`}
      </h2>

      {!hasRecipes ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 200px)",
            fontSize: "1.5em",
            color: "#FFF",
            textAlign: "center",
          }}
        >
          {/* No recipes to display. */}
          <img src="/no-display.svg" />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            paddingBottom: "30px",
          }}
        >
          {sampleRecipes
            .sort(
              (a, b) =>
                (b.hasAllIngredients ? 1 : -1) - (a.hasAllIngredients ? 1 : -1)
            )
            .map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onOpenDetail={openRecipeDetail}
              />
            ))}
        </div>
      )}

      {/* Render the RecipeDetail component if a recipe is selected */}
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={closeRecipeDetail} />
      )}
    </div>
  );
}

export default Results;
