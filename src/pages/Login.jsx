import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="containerbg-slate-50 px-4 py-16">
      <div className="login-container mx-auto max-w-5xl rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-100 lg:grid lg:grid-cols-2">
        <div className="mini-container hidden rounded-l-[2rem] bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Welcome back</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">Sign in to track your orders and shop faster.</h1>
            <p className="mt-6 max-w-md text-slate-300">
              Your account keeps shipping information, order history, and saved preferences in one place.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-amber-300">Need a new account?</p>
            <p className="mt-2 text-sm text-slate-300">
              New customers can begin in the get started flow and move into shopping right away.
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="p-8 md:p-10">
          <h1 className="text-3xl font-bold text-slate-900">Login to Your Account</h1>
          <p className="mt-3 text-slate-500">
            Use your email and password to continue.
          </p>

          <div className="mt-8 space-y-5">
            <div className="input-group">
              <label className="label">Email</label>
              <input className="input2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                />
            </div>

            <div className="input-group">
              <label className="label">Password</label>
              <input className="input2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                />
            </div>

            <button className="button" type="submit">Login</button>

            <p className="text-sm text-slate-600">
              Don't have an account? <Link to="/get-started" className="font-semibold text-amber-600 hover:underline">Get started</Link>
            </p>

          
          </div>
            <Link to="/get-started" className="button1 text-center ">
              Create New Account
            </Link>

          {error && <p className="error-message mt-5">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;