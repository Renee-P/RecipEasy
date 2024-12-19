import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

function Results({ data }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openRecipeDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  const hasRecipes = data && data.length > 0;

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
          `You can make ${data.length} recipe${data.length > 1 ? "s" : ""}!`}
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
          <img src="/no-display.svg" alt="No recipes available" />
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
          {data.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onOpenDetail={openRecipeDetail}
            />
          ))}
        </div>
      )}

      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={closeRecipeDetail} />
      )}
    </div>
  );
}

export default Results;
