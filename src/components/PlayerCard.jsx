import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ name, points, rank, wins, losses, activity, image, children }) => {
  const isVerified = true;
  return (  
    <div className="player-card">
      <div className="card-header">
        <div className="player-rank">{rank}</div>
        {isVerified && <div className="verified-badge" title="Verified Athlete">✓</div>}
      </div>
      
      <div className="avatar-container">
        <div className="avatar-glow"></div>
        <img 
          className="player-avatar" 
          src={image || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop"} 
          alt={name} 
        />
      </div>
      
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        
        <div className="record-container">
          <div className="record-item win">
            <span className="record-label">WINS</span>
            <span className="record-value">{wins}</span>
          </div>
          <div className="record-divider"></div>
          <div className="record-item loss">
            <span className="record-label">LOSSES</span>
            <span className="record-value">{losses}</span>
          </div>
        </div>

        <div className="player-stats">
          <div className="stat-item">
            <span className="stat-label">POINTS</span>
            <span className="stat-value">{points}</span>
          </div>
          
          <div className="activity-section">
            <div className="activity-header">
              <span className="stat-label">ACTIVITY LEVEL</span>
              <span className="activity-percent">{activity}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${activity}%` }}></div>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default PlayerCard;
