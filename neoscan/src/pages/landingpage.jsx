import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

function LandingPage() {
  // State to toggle navigation menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Section */}
      <main className="text-center mt-10">
        <section className="bg-blue-500 text-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-bold">Early Detection Saves Lives</h2>
          <p>Upload an image, describe your symptoms, and let AI assist you in assessing health risks.</p>
        </section>

        {/* CTA Button */}
        <a href="/healthcare">
          <Button text="Find Doctors Near You" color="bg-green-500 text-white" />
        </a>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
