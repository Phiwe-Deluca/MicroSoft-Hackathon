import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Dashboard() {
  // Store symptoms
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState("");
  const [logDate, setLogDate] = useState("");

  // Store dynamic health tips
  const [healthTip, setHealthTip] = useState("Loading tip...");

  // Function to log symptoms
  const logSymptom = () => {
    if (!logDate || !newSymptom.trim()) return;
    setSymptoms([...symptoms, { date: logDate, text: newSymptom }]);
    setNewSymptom("");
    setLogDate("");
  };

  // Generate health tip based on logged symptoms
  const generateHealthTip = () => {
    const tips = [
      "Drink plenty of water to stay hydrated.",
      "Get at least 7 hours of sleep for better immune health.",
      "Exercise regularly to boost metabolism and reduce inflammation.",
      "Eat a balanced diet rich in vitamins and antioxidants.",
      "Avoid tobacco and excessive alcohol consumption.",
    ];

    // Personalized based on symptom patterns (mock logic)
    if (symptoms.some((s) => s.text.includes("fatigue"))) {
      setHealthTip("Boost your energy with iron-rich foods!");
    } else if (symptoms.some((s) => s.text.includes("skin issues"))) {
      setHealthTip("Protect your skin—use SPF and stay hydrated.");
    } else {
      setHealthTip(tips[Math.floor(Math.random() * tips.length)]);
    }
  };

  useEffect(() => {
    generateHealthTip(); // Load initial tip on mount
  }, [symptoms]); // Update when symptoms change

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">Symptom & Health Tracking</h2>
      <p>Log your symptoms and monitor changes over time.</p>

      {/* Symptom Logger */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">Log Your Symptoms</h3>
        <InputField
          type="date"
          placeholder="Select Date"
          value={logDate}
          onChange={(e) => setLogDate(e.target.value)}
        />
        <textarea
          value={newSymptom}
          onChange={(e) => setNewSymptom(e.target.value)}
          placeholder="Describe your symptoms..."
          className="border p-2 rounded-md w-full my-2"
        />
        <Button text="Log Symptom" color="bg-blue-500 text-white" onClick={logSymptom} />
      </div>

      {/* Symptom Timeline */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">Symptom Timeline</h3>
        <ul>
          {symptoms.map((symptom, index) => (
            <li key={index} className="border p-2 rounded-md my-1">
              <strong>{symptom.date}:</strong> {symptom.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Personalized Health Tips */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">Daily Health Tip</h3>
        <p className="text-lg">{healthTip}</p>
        <Button text="Get a New Tip" color="bg-green-500 text-white" onClick={generateHealthTip} />
      </div>

      {/* Navigation */}
      <a href="/" className="text-blue-500 underline">Back to Home</a>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
