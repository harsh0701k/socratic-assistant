// src/App.js

import React from 'react';
import ChatBox from './components/ChatBox';
import './ChatBox.css';

function App() {
  const handleSendMessage = (message) => {
    console.log('Message sent to backend:', message);
    
    // Assuming your backend is hosted at http://localhost:5000
    fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Response from backend:', data))
      .catch((error) => console.error('Error sending message:', error)); // Handle any errors
  };

  return (
    <div className="App">
      <h1>Socratic Assistant for Data Structures & Algorithms</h1>
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
