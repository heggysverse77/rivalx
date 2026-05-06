import React from 'react';
import './Profile.css';
import { currentUser } from '../../data/current_user';

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>

      <div className="profile-card">
        <div className="profile-main">
          <img src={currentUser.image} alt={currentUser.name} className="profile-avatar" />
          <div className="profile-info">
            <h2>{currentUser.name}</h2>
            <div className="profile-rank">
              <span className="rank-badge">Global Rank {currentUser.rank}</span>
              <span className="points-badge">{currentUser.points} Points</span>
            </div>
          </div>
        </div>

        <div className="profile-stats-grid">
          <div className="stat-card">
            <span className="stat-value">{currentUser.wins}</span>
            <span className="stat-label">Wins</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{currentUser.losses}</span>
            <span className="stat-label">Losses</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{((currentUser.wins / (parseInt(currentUser.wins) + parseInt(currentUser.losses))) * 100).toFixed(1)}%</span>
            <span className="stat-label">Win Rate</span>
          </div>
        </div>

        <div className="profile-activity">
          <h3>Recent Activity</h3>
          <div className="activity-bar-container">
            <div 
              className="activity-bar-fill" 
              style={{ width: `${currentUser.activity}%` }}
            ></div>
          </div>
          <span className="activity-text">{currentUser.activity}% Intensity Score</span>
        </div>

        <div className="profile-actions">
          <button className="edit-profile-btn">Edit Profile</button>
          <button className="settings-btn">Settings</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
