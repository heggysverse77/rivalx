import React from 'react';
import PlayerCard from '../components/PlayerCard';
import './Explore.css';
import { useNavigate } from 'react-router-dom';
import { explore_players } from "../../data/exploreplayers.js";


function Explore() {
  const navigate = useNavigate();
 
  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore Rivals</h1>
        <p>Find opponents, track performance, and climb the global ladder.</p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label>Sport</label>
          <select>
            <option>All Sports</option>
            <option>Tennis</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Padel</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Points Range</label>
          <select>
            <option>All Ranks</option>
            <option>0 - 10</option>
            <option>11 - 100</option>
            <option>+100</option>
          </select>
        </div>

        <div className="filter-group toggle-group">
          <span>Verified Only</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="players-grid">
        {explore_players.map((player, index) => (
          <PlayerCard key={index} {...player}>
            <button className="challenge-btn" onClick={() => navigate("/schedule", { state: player })}>
              Challenge Him
            </button>
          </PlayerCard>
        ))}
      </div>
    </div>
  );
}
// data.js

export default Explore;
