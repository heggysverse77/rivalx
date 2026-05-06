import React, { createContext, useState, useContext } from 'react';
import { current_opponents } from '../../data/opponents_players';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState(current_opponents);

  const addMatch = (newMatch) => {
    setMatches((prevMatches) => [newMatch, ...prevMatches]);
  };

  return (
    <MatchContext.Provider value={{ matches, addMatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatches = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchProvider');
  }
  return context;
};
