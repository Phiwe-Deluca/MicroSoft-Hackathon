import { useState } from "react";

const Chat = () => {
  const [language, setLanguage] = useState("en");
  const [userMessage, setUserMessage] = useState("");
  const [botReply, setBotReply] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChat = async () => {
    if (!userMessage.trim()) return;

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage }),
    });

    const data = await response.json();
    setMessages([...messages, { user: userMessage }, { bot: data.reply }]);
    setUserMessage("");
  };

  return (
    <div className="border p-4 rounded-md h-64 overflow-y-auto bg-gray-100 my-4">
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="af">Afrikaans</option>
        <option value="en">English</option>
        <option value="nr">Ndebele</option>
        <option value="xh">Xhosa</option>
        <option value="zu">Zulu</option>
        <option value="tn">Tswana</option>
        <option value="st">Sesotho</option>
        <option value="ve">Venda</option>
        <option value="ts">Tsonga</option>
        <option value="ss">Swati</option>
        <option value="nso">Northern Sotho</option>
      </select>

      <div className="chat-window">
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

      <input
        type="text"
        placeholder="Type your message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button onClick={handleChat}>Send</button>
    </div>
  );
};

export default Chat;
