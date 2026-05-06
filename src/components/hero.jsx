import React, { useState, useEffect } from 'react';
import './Hero.css';
import tennis from '../assets/images/tennis.jpg';
import boxing from '../assets/images/boxing.jpg';
import running from '../assets/images/running.jpg';
import padel from '../assets/images/padel.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const sports = [
  {
    name: 'Tennis',
    color: '#22C55E',
    image: tennis,
    subtitle: 'Dominate the court. Rise in the rankings.'
  },
  {
    name: 'Boxing',
    color: '#EF4444',
    image: boxing,
    subtitle: 'Step into the ring. Prove your strength.'
  },
  {
    name: 'Running',
    color: '#3B82F6',
    image: running,
    subtitle: 'Push your limits. Beat the clock.'
  },
  {
    name: 'Padel',
    color: '#A855F7',
    image: padel,
    subtitle: 'Fast-paced action. Ultimate teamwork.'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sports.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSport = sports[currentIndex];

  return (
    <section className="hero-section" style={{ '--accent-color': currentSport.color }}>
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Find Your Rival.<br />
            <span>Prove Your Rank.</span>
          </h1>
          <p className="hero-subtitle">
            {currentSport.subtitle}
          </p>
          <Link to= '/explore' >
          
          <button className="hero-cta" onClick={() => navigate("/explore")}>
            Find Opponent
            <span className="cta-icon">⚔️</span>
          </button>
          </Link>

          
          <div className="sport-indicators">
            {sports.map((_, index) => (
              <div 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            {sports.map((sport, index) => (
              <img
                key={index}
                src={sport.image}
                alt={sport.name}
                className={`hero-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
            <div className="image-overlay"></div>
          </div>
          
          <div className="sport-name-badge">
            {currentSport.name}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
