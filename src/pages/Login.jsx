import React, { useState } from "react";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
    } else {
      // Here you can call an API or proceed with authentication
      console.log("Logging in with:", email, password);
      setError(""); // Clear the error message
    }
  };

  return (
    <div className="login-container max-w-md mx-auto mt-10 p-6 max-h-[550px] bg-white rounded shadow">
    
      {error && <p className="error-message">{error}</p>} {/* Display error */}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label className="label">Email</label>
          <input className="input2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind email state
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label className="label">Password</label>
          <input className="input2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Bind password state
            placeholder="Enter your password"
          />
        </div>

        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;