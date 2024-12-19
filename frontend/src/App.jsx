import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="whitesht1"></div>

      <header>
        <nav>
          <ul className="nav-list">
            <a href="#home" />
            <img
              src="/logo-name.svg"
              alt="ReciEasy Logo"
              className="logopo"
            ></img>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h1 className="he1">What do you have in your</h1>
          <h1 className="he2">fridge?</h1>
          <div className="hero-button">
            <Link to="/home" className="btn">
              Start Cooking
            </Link>
          </div>
        </div>
        <div className="landing-cards">
          <div className="landing-card1">
            <h3 className="he3">Personalized Recipes</h3>
            <img
              src="/cok.webp"
              alt="Person Cooking"
              className="landing-img"
            ></img>
          </div>
          <div className="landing-card2">
            <h3 className="h3">Dietary Flexibility</h3>
            <img
              src="/cok2.webp"
              alt="Person Cooking"
              className="landing-img"
            ></img>
          </div>
          <div className="landing-card3">
            <h3 className="he3">Quick and Easy</h3>
            <img
              src="/cok3.webp"
              alt="Person Cooking"
              className="landing-img"
            ></img>
          </div>
        </div>
      </section>

      <footer>
        <p style={{ marginTop: "5px" }}>
          &copy; 2024 RecipEasy. All rights reserved.
        </p>
        <Link style={{ color: "white" }} to="/admin-login">
          Admin
        </Link>
      </footer>
    </div>
  );
}

export default App;
