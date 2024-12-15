import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  // return (
  //   <div>
  //     <h1>Welcome to RecipEasy</h1>
  //     <p>
  //       Get started by logging in or signing up to find your favorite recipes.
  //     </p>
  //     <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
  //   </div>
  // );

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
        <div className="header-buttons">
          <Link to="/login" className="btn">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
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
        {/* <img src="/Rer.svg" alt="Salad" className="hero-image"></img> */}
        <div className="landing-cards">
          <div className="landing-card1">
            <h3 className="he3">Personalized Recipe</h3>
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

      <div className="whitesht"></div>

      <section id="featured-recipes">
        <div className="featured-content">
          <img
            src="/piz.jpg"
            alt="Featured Recipe"
            className="featured-img"
          ></img>
          <div className="featured-text">
            <h2>Classic Italian Pizza</h2>
            <p>
              TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="featured-content1">
          <img src="/ram.jpg" alt="Featured Recipe" className="featured-img" />
          <div className="featured-text">
            <h2>Classic Italian Pizza</h2>
            <p>
              TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a> |
          <a href="#terms-of-service">Terms of Service</a> |
          <a href="#contact">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>{" "}
          |
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>{" "}
          |
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
        </div>
        <p>&copy; 2024 RecipEasy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
