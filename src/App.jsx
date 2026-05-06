import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Explore from './pages/Explore';
import SchedulingPage from './pages/Scheduling';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { MatchProvider } from './context/MatchContext';

function App() {
  return (
    <MatchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/schedule" element={<SchedulingPage />} />
      </Routes>
    </MatchProvider>
  );
}
      


   
    
  

export default App
