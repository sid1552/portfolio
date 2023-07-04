import React from 'react';
import Navbar from './Components/navbar';
import DayNight from './Components/day_night';
import Home from './Components/home';
import Skill from './Components/skills';

function App() {
  return (
    <div>
      <Navbar />
      <DayNight />
      <Home />
      <Skill />
    </div>
  );
}

export default App;
