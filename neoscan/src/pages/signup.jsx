import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // Check password confirmation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Basic validation (can be extended for backend authentication)
    if (name && email && password) {
      alert("Account created successfully!");
      navigate("/landingpage"); // Redirect after signup
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center w-96 mx-auto mt-10">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">Join NeoScan</h2>
      <p>Create your account to get started</p>

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="mt-4 space-y-4">
        <InputField type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <InputField type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputField type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <InputField type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <Button text="Sign Up" color="bg-green-500 text-white" />
      </form>

      {/* Login Link */}
      <p className="mt-4">
        Already have an account? <a href="/login" className="text-blue-500 underline">Login</a>
      </p>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Signup;
