import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Mock authentication state for demonstration
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navItems = ['Home', 'Matches', 'Explore'];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="logo">Rivalyx<span>.</span></a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${activeLink === item ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item);
              }}
            >
              {item}
            </a>
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
