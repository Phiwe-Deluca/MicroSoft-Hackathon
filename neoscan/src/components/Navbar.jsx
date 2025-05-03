import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">NeoScan</h1>
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
        ☰ {/* Hamburger Menu Icon */}
      </button>

      {menuOpen && (
        <nav className="bg-gray-800 text-white w-64 absolute top-16 left-0 p-4 rounded-md shadow-lg">
          <ul>
            <li><Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded-md">Dashboard</Link></li>
            <li><Link to="/profile" className="block hover:bg-gray-700 p-2 rounded-md">Profile</Link></li>
            <li><Link to="/diagnosis" className="block hover:bg-gray-700 p-2 rounded-md">Diagnosis</Link></li>
            <li><Link to="/healthcare" className="block hover:bg-gray-700 p-2 rounded-md">Healthcare</Link></li>
            <li><Link to="/resources" className="block hover:bg-gray-700 p-2 rounded-md">Resources</Link></li>
            <li><Link to="/login" className="block hover:bg-gray-700 p-2 rounded-md">Login</Link></li>
            <li><Link to="/chatbot" className="block hover:bg-gray-700 p-2 rounded-md">Chatbot</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
