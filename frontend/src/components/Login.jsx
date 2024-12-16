import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    // Prepare login data
    const loginData = {
      email,
      password,
    };

    // Send API request to authenticate user
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login successful") {
          // Redirect to home page
          history.push("/home");
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred, please try again.");
      });
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

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

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
