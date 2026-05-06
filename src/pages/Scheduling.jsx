import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './scheduling.css';
import { useMatches } from "../context/MatchContext";

function SchedulingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addMatch } = useMatches();
  const opponent = location.state || {};
  const [messages, setMessages] = useState([]);
  
  // State for the proposal form
  const [formData, setFormData] = useState({ 
    location: "", 
    date: "", 
    time: "" 
  });

  // Explicit change handler for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePropose = () => {
    if (!formData.location || !formData.date || !formData.time) {
      alert("Please fill in all match details.");
      return;
    }

    const newMessage = {
      text: `📅 Match Proposal: ${formData.location} on ${formData.date} at ${formData.time}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "me"
    };

    setMessages(prev => [...prev, newMessage]);

    // Create the new match object to add to Matches page
    const newMatch = {
      ...opponent,
      matchLocation: formData.location,
      matchDate: formData.date,
      matchTime: formData.time
    };

    // Add to global state
    addMatch(newMatch);

    // Navigate to matches page after a short delay to show the message was sent
    setTimeout(() => {
      navigate('/matches');
    }, 1000);
  };

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <h1>Propose Match</h1>
        <p>Coordinate the time and place for your next victory.</p>
      </div>

      <div className="opponent-card">
        {opponent.image && <img src={opponent.image} alt={opponent.name} />}
        <div>
          <h4>{opponent.name || "Unknown Opponent"}</h4>
          <p>Rank: {opponent.rank || "N/A"}</p>
        </div>
      </div>

      <div className="chat-box">
        {messages.length === 0 ? (
          <div className="empty-chat">Start a conversation with {opponent.name}</div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.type === "me" ? "me" : "them"}`}>
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          ))
        )}
      </div>

      <div className="proposal-form">
        <input 
          name="location"
          type="text" 
          placeholder="Location" 
          value={formData.location}
          onChange={handleChange}
        />
        <input 
          name="date"
          type="date" 
          value={formData.date}
          onChange={handleChange}
        />
        <input 
          name="time"
          type="time" 
          value={formData.time}
          onChange={handleChange}
        />
        <button className="propose-btn" onClick={handlePropose}>
          Propose Match
        </button>
      </div>
    </div>
  );
}

export default SchedulingPage;