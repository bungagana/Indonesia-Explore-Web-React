import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './css/Chatbot.css';

const apiKey = 'AIzaSyClO51g8pLssQ2tS22bo70ZO05m3tA1qPU';

const SoekarndoBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async (messageInput) => {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.0-pro",
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              { text: "kamu ada Bot AI yang punya nama 'Soekarndo' yang akan menjawab dan memberita tau tentang sejarah indonesia dan budaya indonesia\n" },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: "Wah, keren idemu! Aku bisa bantu untuk membuat \"Soekarndo\", Bot AI yang tahu banyak tentang sejarah dan budaya Indonesia. ...",
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage(messageInput);
      const botMessage = parseMessage(result.response.text());

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", text: messageInput },
        { role: "bot", text: botMessage },
      ]);
      setInput(""); // Clear the input field after sending the message
    } catch (error) {
      if (error.code === 429) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", text: "Quota exceeded. Please try again later." },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", text: "An error occurred. Please try again." },
        ]);
      }
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      fetchData(input); // Send the message when the button is clicked
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage(); // Send the message when the Enter key is pressed
    }
  };

  const parseMessage = (text) => {
    const parts = text.split(/(\*.*?\*|_.*?_|\~.*?\~)/).map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <span key={index} className="bold">{part.slice(1, -1)}</span>;
      } else if (part.startsWith('_') && part.endsWith('_')) {
        return <span key={index} className="italic">{part.slice(1, -1)}</span>;
      } else if (part.startsWith('~') && part.endsWith('~')) {
        return <span key={index} className="underline">{part.slice(1, -1)}</span>;
      } else {
        return part;
      }
    });

    return <>{parts}</>;
  };

  return (
    <div>
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="chatbot-box">
            <div className="chatbot-header">
              <h3>Soekarndo Bot</h3>
              <button onClick={toggleChat} className="close-btn">✕</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.role === "user" ? "user-message" : "bot-message"}`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} // Listen for the Enter key
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
      <button onClick={toggleChat} className="floating-button">
        <i className="bi bi-chat-dots"></i> {/* Bootstrap chat icon */}
      </button>
    </div>
  );
};

export default SoekarndoBot;
