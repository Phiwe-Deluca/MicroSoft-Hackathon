import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashbot";
import Diagnosis from "./pages/Diagnosis";
import Healthcare from "./pages/Healthcare";
import LandingPage from "./pages/Landingpage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
