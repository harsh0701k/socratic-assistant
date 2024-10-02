// src/components/ChatBox.js

import React, { useState } from 'react';
import '../ChatBox.css'; // This should be correct if you moved the CSS to src



const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = { sender: 'student', text: message };
    setChatHistory([...chatHistory, newMessage]);
    onSendMessage(message); // Trigger backend connection
    setMessage(''); // Clear input after sending
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`message ${chat.sender}`}>
            {chat.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your answer here..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
