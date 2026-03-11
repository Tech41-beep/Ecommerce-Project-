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
    <div className="login-container max-w-md mx-auto mt-10 p-6 max-h-[500px] mb-[110px] bg-white rounded shadow ">
       
      <form onSubmit={handleLogin}>
        <h1 className="my-[20px] mx-[20px] font-bold text-slate-600 text-xl ">Login to Your Account
       </h1>
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
        <h2 className="text-lg text-slate-600 mt-5">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </h2>
        <button className="button1" type="submit">Creat New Account</button>
      </form>
      {error && <p className="error-message mt-5">{error}</p>} {/* Display error */}
    </div>
  );
};

export default Login;