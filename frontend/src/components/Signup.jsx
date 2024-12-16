import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css"; // Make sure to import the CSS

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleSignup = (event) => {
    event.preventDefault();
    // Signup logic here (API calls, validation, etc.)
    if (password === confirmPassword) {
      console.log("Signed up:", name, email);
      history.push("/login"); // Navigate to login after successful sign-up
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="bod">
      <div className="container">
        <div className="signup">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="signup-remember-label">
              <input type="checkbox" id="agree" name="agree" required />
              <span>Agree to terms</span>
            </div>
            <input type="submit" value="Sign Up" />
            <p className="signup-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
