import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Healthcare() {
  // State for search results
  const [hospitals, setHospitals] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  // Initialize Google Maps
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -26.2041, lng: 28.0473 }, // Johannesburg Default Center
        zoom: 12,
      });
      window.map = map;
    };

    if (window.google) {
      initMap();
    }
  }, []);

  // Find Nearby Hospitals
  const findHospitals = () => {
    const service = new window.google.maps.places.PlacesService(window.map);
    const request = {
      location: window.map.getCenter(),
      radius: 5000,
      type: ["hospital"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
      }
    });
  };

  // Suggest Specialist Doctors
  const findSpecialists = () => {
    const fakeSpecialists = [
      { name: "Dr. Smith - Oncologist", location: "Johannesburg Cancer Center" },
      { name: "Dr. Patel - Dermatologist", location: "Skin Health Clinic" },
      { name: "Dr. Williams - Radiologist", location: "Radiology Experts SA" },
    ];
    setSpecialists(fakeSpecialists);
  };

  // Open Google Maps Directions
  const openDirections = (place) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.geometry.location.lat())},${encodeURIComponent(place.geometry.location.lng())}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">Find Healthcare Professionals</h2>
      <p>Search for verified healthcare professionals and schedule telehealth appointments.</p>

      {/* Google Maps Display */}
      <div id="map" className="w-full h-64 my-4"></div>
      <Button text="Find Hospitals Near Me" color="bg-blue-500 text-white" onClick={findHospitals} />

      {/* Display Found Hospitals */}
      <ul className="my-4">
        {hospitals.map((hospital, index) => (
          <li key={index} className="border p-2 rounded-md my-1">
            {hospital.name} - <Button text="Get Directions" color="text-blue-500 underline" onClick={() => openDirections(hospital)} />
          </li>
        ))}
      </ul>

      {/* AI-Powered Specialist Suggestions */}
      <h3 className="text-xl font-semibold">Recommended Specialists</h3>
      <Button text="Find Specialists" color="bg-green-500 text-white" onClick={findSpecialists} />
      <ul className="my-4">
        {specialists.map((specialist, index) => (
          <li key={index} className="border p-2 rounded-md my-1">
            {specialist.name} - {specialist.location}
          </li>
        ))}
      </ul>

      {/* Navigation */}
      <a href="/" className="text-blue-500 underline">Back to Home</a>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Healthcare;
