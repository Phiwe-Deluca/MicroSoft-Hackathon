import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation (you can add backend authentication here)
    if (email && password) {
      alert("Login successful!");
      navigate("/landingpage"); // Redirect after login
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center w-96 mx-auto mt-10">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">Welcome to NeoScan</h2>
      <p>Sign in to continue</p>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Login" color="bg-blue-500 text-white" onClick={handleLogin} />
      </form>

      {/* Signup Link */}
      <p className="mt-4">
        Don't have an account? <a href="/signup" className="text-blue-500 underline">Sign up</a>
      </p>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Login;
