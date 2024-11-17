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
      <div class="whitesht1"></div>

      <header>
        <nav>
          <ul class="nav-list">
            <a href="#home" />
            <img src="logo-name.jpg" alt="ReciEasy Logo" class="logopo"></img>
          </ul>
        </nav>
        <div class="header-buttons">
          <Link to="/login" class="btn">
            Log in
          </Link>
          <Link to="/signup" class="btn1">
            Sign up
          </Link>
        </div>
      </header>

      <section id="hero">
        <div class="hero-content">
          <h1 class="he1">What do you have in your</h1>
          <h1 class="he2">fridge?</h1>
          <div class="hero-button">
            <Link to="/home" class="btn">
              Start Cooking
            </Link>
          </div>
        </div>
        <img src="Rer.jpg" alt="Salad" class="hero-image"></img>
        <div class="landing-cards">
          <div class="landing-card1">
            <h3 class="he3">Personalized Recipe</h3>
            <img src="cok.jpg" alt="Person Cooking" class="landing-img"></img>
          </div>
          <div class="landing-card2">
            <h3 class="h3">Dietary Flexibility</h3>
            <img src="cok2.jpg" alt="Person Cooking" class="landing-img"></img>
          </div>
          <div class="landing-card3">
            <h3 class="he3">Quick and Easy</h3>
            <img src="cok3.jpg" alt="Person Cooking" class="landing-img"></img>
          </div>
        </div>
      </section>

      <div class="whitesht"></div>

      <section id="featured-recipes">
        <div class="featured-content">
          <img src="piz.jpeg" alt="Featured Recipe" class="featured-img"></img>
          <div class="featured-text">
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

        <div class="line"></div>

        <div class="featured-content1">
          <img src="ram.jpeg" alt="Featured Recipe" class="featured-img" />
          <div class="featured-text">
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
        <div class="footer-links">
          <a href="#privacy-policy">Privacy Policy</a> |
          <a href="#terms-of-service">Terms of Service</a> |
          <a href="#contact">Contact Us</a>
        </div>
        <div class="social-media">
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
