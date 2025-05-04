import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Chat from "../components/Chat"; // Import Chat
import "./chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { user: input }]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prevMessages) => [...prevMessages, { bot: data.reply }]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { bot: "Error processing your request." },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { bot: "Server connection failed." },
      ]);
    }

    setInput(""); // Clear input field
  };

  return (
    <div className="chatbot-container">
      <h2 className="text-3xl font-bold">NeoScan AI Chatbot</h2>
      <p>Ask me anything about healthcare, symptoms, and AI diagnosis!</p>

      {/* Chat Window */}
      <div className="border p-4 rounded-md h-64 overflow-y-auto bg-gray-100 my-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-left ${
              msg.user ? "text-blue-500" : "text-green-500"
            }`}
          >
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
    </div>
  );
}

export default Chatbot;
