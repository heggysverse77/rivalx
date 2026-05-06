import React from 'react';
import PlayerCard from '../components/PlayerCard';
import './Matches.css';
import { currentUser } from "../../data/current_user.js";
import { useMatches } from '../context/MatchContext';

function Matches() {
  const { matches } = useMatches();

  return (
    <div className="matches-page">
      <div className="matches-header">
        <h1>Your Active Matches</h1>
      </div>

      <div className="matches-container">
        {matches.map((opponent, index) => (
          <div className="match-row" key={index}>
            <div className="match-status-badge">Active Match</div>
            
            <div className="match-main-content">
              {/* My Card (Left) */}
              <div className="my-side">
                <PlayerCard {...currentUser} />
              </div>

              {/* VS Center */}
              <div className="vs-indicator">
                <div className="vs-text">VS</div>
                <div className="vs-line"></div>
              </div>

              {/* Opponent Card (Right) */}
              <div className="opponent-side">
                <PlayerCard {...opponent} />
              </div>
            </div>

            {/* Match Info Footer */}
            <div className="match-info-footer">
              <div className="info-item">
                <span className="info-label">📍 Location:</span>
                <span className="info-value">{opponent.matchLocation}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📅 Date:</span>
                <span className="info-value">{opponent.matchDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">⏰ Time:</span>
                <span className="info-value">{opponent.matchTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;