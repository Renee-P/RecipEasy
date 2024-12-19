import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

function AdminLogin({ setIsAuthorized }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/admin/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        setIsAuthorized(true);
        history.push("/admin");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="wrapper1">
      <div className="wrapper">
        <div className="title">
          <span>Admin Login</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </i>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-lock">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H14V16H2V6H4ZM6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4V6H6V4ZM7 13V9H9V13H7Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          <div className="row button" style={{ marginBottom: "35px" }}>
            <input
              type="submit"
              style={{ marginBottom: "35px" }}
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
