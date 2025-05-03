import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Diagnosis() {
  // State for symptoms, image upload, and AI result
  const [symptoms, setSymptoms] = useState("");
  const [riskLevel, setRiskLevel] = useState("Awaiting results...");
  const [image, setImage] = useState(null);

  // Voice Recognition for Symptoms Input
  const startVoiceRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      setSymptoms(event.results[0][0].transcript);
    };
    recognition.start();
  };

  // Handle Image Upload
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  // Submit AI Diagnosis
  const submitDiagnosis = () => {
    setRiskLevel("Processing... AI analysis in progress.");
    
    // Simulated AI processing delay
    setTimeout(() => {
      const riskLevels = ["Low", "Medium", "High"];
      setRiskLevel(`Risk Level: ${riskLevels[Math.floor(Math.random() * riskLevels.length)]}. Please consult a healthcare professional.`);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">AI-Powered Diagnosis</h2>
      <p>Upload an image and describe your symptoms for AI analysis.</p>

      {/* Image Upload */}
      <div className="my-4">
        <label className="text-lg font-semibold">Upload Image:</label>
        <InputField type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Symptom Input with Voice Recognition */}
      <div className="my-4">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          className="border p-2 rounded-md w-full"
        />
        <Button text="🎤 Speak" color="bg-gray-500 text-white" onClick={startVoiceRecognition} />
      </div>

      {/* Submit AI Diagnosis */}
      <Button text="Submit for AI Analysis" color="bg-blue-500 text-white" onClick={submitDiagnosis} />

      {/* Results Display */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">AI Risk Assessment:</h3>
        <p className="text-lg">{riskLevel}</p>
      </div>

      {/* Navigation */}
      <a href="/" className="text-blue-500 underline">Back to Home</a>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Diagnosis;
