import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Mock authentication state for demonstration
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Matches', path: '/matches' },
    { name: 'Explore', path: '/explore' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/home" className="logo">Rivalyx<span>.</span></Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path || (item.name === 'Home' && location.pathname === '/') ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="nav-right">
        {isAuthenticated ? (
          <div 
            className="profile-container" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* Real profile image as per constitution */}
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop" 
              alt="Profile" 
              className="profile-img"
            />
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#profile" className="dropdown-item">Profile</a>
                <a href="#matches" className="dropdown-item">My Matches</a>
                <a href="#logout" className="dropdown-item" onClick={(e) => {
                  e.preventDefault();
                  setIsAuthenticated(false);
                }}>Sign Out</a>
              </div>
            )}
          </div>
        ) : (

          <button className="sign-in-btn" onClick={() => setIsAuthenticated(true)}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
