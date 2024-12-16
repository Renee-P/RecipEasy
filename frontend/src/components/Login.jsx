import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    // Login logic here (API calls, validation, etc.)
    console.log("Logged in:", username);
    history.push("/home"); // Navigate to the main page after successful login
  };

  return (
    <div className="bod">
      <div className="container">
        <div className="image"></div> {/* Image will be on the left */}

        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

            <div className="remember-label">
              <span>Remember me</span>
              <input type="checkbox" id="remember" name="remember" />
              <a
                href="#"
                className="forgot-password"
                style={{ color: "#FA8A41" }}
              >
                Forgot Password?
              </a>
            </div>

            <input type="submit" value="Log In" />

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
