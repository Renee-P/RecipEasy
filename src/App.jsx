import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to RecipEasy</h1>
      <p>Get started by logging in or signing up to find your favorite recipes.</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default App;