import { useState } from "react";

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
            <li><a href="/dashboard" className="block hover:bg-gray-700 p-2 rounded-md">Dashboard</a></li>
            <li><a href="/profile" className="block hover:bg-gray-700 p-2 rounded-md">Profile</a></li>
            <li><a href="/diagnosis" className="block hover:bg-gray-700 p-2 rounded-md">Diagnosis</a></li>
            <li><a href="/healthcare" className="block hover:bg-gray-700 p-2 rounded-md">Healthcare</a></li>
            <li><a href="/resources" className="block hover:bg-gray-700 p-2 rounded-md">Resources</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
