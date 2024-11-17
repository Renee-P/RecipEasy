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
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <div className="bod">
      <div className="container">
        <div className="image"></div>
        <div className="login">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

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

            {/* temp will add logic later */}

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
