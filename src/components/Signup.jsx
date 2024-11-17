import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const history = useHistory();

  // const handleSignup = (event) => {
  //   event.preventDefault();
  //   // Signup logic here (API calls, validation, etc.)
  //   console.log('Signed up:', username);
  //   history.push('/login'); // Navigate to login after successful sign-up
  // };

  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSignup}>
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
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>

    <div className="bod">
      <div className="container" style={{ overflowY: "auto" }}>
        {/* Left side with image */}
        <div className="imagesu"></div>

        {/* Right side with sign-up form */}
        <div className="signup">
          <h1>Sign Up</h1>
          <form>
            {/* Name input */}
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            {/* Email input */}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            {/* Password input */}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            {/* Confirm Password input */}
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />

            {/* Agree to terms checkbox */}
            <div className="remember-label">
              <span>Agree to terms</span>
              <input type="checkbox" id="agree" name="agree" required />
            </div>

            {/* Submit button */}
            <input type="submit" value="Sign Up" />

            {/* Log in link */}
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
