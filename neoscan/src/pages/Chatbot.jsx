import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Chat from "../components/Chat"; // Import Chat

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Simulated bot response (Can be replaced with AI API)
    const botResponse = "I'm here to assist you! Ask me anything.";
    setMessages([...messages, { user: input }, { bot: botResponse }]);
    setInput("");
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center w-96 mx-auto mt-10">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">NeoScan AI Chatbot</h2>
      <p>Ask me anything about healthcare, symptoms, and AI diagnosis!</p>

      {/* Chat Window */}
      <div className="border p-4 rounded-md h-64 overflow-y-auto bg-gray-100 my-4">
        {messages.map((msg, index) => (
          <div key={index} className={`text-left ${msg.user ? "text-blue-500" : "text-green-500"}`}>
            <strong>{msg.user ? "You:" : "Bot:"}</strong> {msg.user || msg.bot}
          </div>
        ))}
      </div>

      {/* Chat Input
      <div className="flex space-x-2">
        <InputField type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
        <Button text="Send" color="bg-blue-500 text-white" onClick={handleSendMessage} />
      </div> */}

      {/* Chat Component */}
      <Chat />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Chatbot;
