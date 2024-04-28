import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from "./Dashboard";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");


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

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:8080/sendMsg', { msgData: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteMsg/${id}`);
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Dashboard />
      <div
        style={{
          padding: "20px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "600px",
        }}
      >
        <h1
          style={{
            padding: "20px",
            color: "green",
            borderBottom: "2px solid blue",
          }}
        >
          Messages
        </h1>
        <div>
        {messages.map(message => (
          <div key={message.id}>
            <p>{message.msgData}</p>
            <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
          </div>
        ))}
      </div>
      </div>
      <form
        
        style={{ padding: "20px", borderTop: "1px solid #ccc", width: "600px" }}
      >
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            marginRight: "5px",
            width: "calc(100% - 80px)",
            padding: "20px",
            fontSize: "16px",
          }}
        />
        <button type="submit" style={{ padding: "5px 10px", fontSize: "16px" }} onClick={handleSendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}
