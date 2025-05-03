import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Profile() {
  const [name, setName] = useState("Harriet Tubman");
  const [email, setEmail] = useState("fake@example.com");
  const [bio, setBio] = useState("Cancer awareness advocate");
  const [profilePic, setProfilePic] = useState("default-avatar.png");
  const navigate = useNavigate();

  // Handle profile picture upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Display uploaded image
    }
  };

  // Handle logout
  const logoutUser = () => {
    alert("You have been logged out.");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center w-96 mx-auto mt-10">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">User Profile</h2>

      {/* Profile Picture Upload */}
      <div className="my-4">
        <img src={profilePic} alt="Profile Picture" className="w-24 h-24 rounded-full mx-auto shadow-md" />
        <InputField type="file" onChange={handleImageUpload} />
      </div>

      {/* User Info Form */}
      <form className="space-y-4">
        <InputField type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <InputField type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="border p-2 rounded-md w-full"
        />
        <Button text="Save Changes" color="bg-blue-500 text-white" />
      </form>

      {/* Logout Button */}
      <Button text="Log Out" color="bg-red-500 text-white" onClick={logoutUser} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Profile;
