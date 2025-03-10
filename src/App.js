import React, { useState, useEffect } from 'react';
import './App.css';
import DNAAnimation from './Components/DNAAnimation';
import DNAExplosion from './Components/DNAExplosion';
import Mainpage from './Components/Mainpage';

function App() {
  const [showExplosion, setShowExplosion] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowExplosion(true);
  //   }, 5000);

  //   // Clean up the timer if the component is unmounted before 3 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  //when mouse click on the screen, show the explosion
  const handleClick = () => {
    setShowExplosion(true);
  }

  return (
    <div className="App" onClick={handleClick}>
      
      {/* {!showExplosion && <DNAAnimation />}
      {showExplosion && <DNAExplosion />} */}
      <Mainpage/>
    </div>
  );
}

export default App;
