import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';

export default function MessageStu() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allMsg');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        <h2>Messages</h2>
        <div>
          {messages.map(message => (
            <div key={message.id} style={{ marginBottom: '10px' }}>
              <p><strong>{message.sender}:</strong> {message.msgData}</p>
              {/* Add additional styling or actions here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
