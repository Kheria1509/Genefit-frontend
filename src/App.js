import React, { useState, useEffect } from 'react';
import './App.css';
import DNAAnimation from './Components/DNAAnimation';
import DNAExplosion from './Components/DNAExplosion';

function App() {
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplosion(true);
    }, 5000);

    // Clean up the timer if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      
      {!showExplosion && <DNAAnimation />}
      {showExplosion && <DNAExplosion />}
    </div>
  );
}

export default App;
