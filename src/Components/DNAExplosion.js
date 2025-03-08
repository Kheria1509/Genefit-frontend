import React, { useEffect } from 'react';
import './DNAExplosion.css';

const DNAExplosion = () => {
  useEffect(() => {
    // Set random colors for each node
    const COLORS = ['hsl(44, 98%, 60%)', 'hsl(197, 50%, 44%)', 'hsl(300, 100%, 100%)', 'hsl(331, 76%, 50%)'];

    const NODES = document.querySelectorAll('.strand__node');
    NODES.forEach(NODE => {
      NODE.style.setProperty('--bg', COLORS[Math.floor(Math.random() * COLORS.length)]);
      // Randomize the direction and distance for explosion
      NODE.style.setProperty('--random-x', Math.random() * 100 - 50); // Random X direction
      NODE.style.setProperty('--random-y', Math.random() * 100 - 50); // Random Y direction
    });

    // Hide the component after the animation ends
    const explosionContainer = document.querySelector('.dna-explosion');
    setTimeout(() => {
      explosionContainer.style.display = 'none';
    }, 4000); // Hide after the explosion animation ends
  }, []);

  return (
    <div className="dna-explosion" style={{ '--total': 13 }}>
      {[...Array(13).keys()].map(index => (
        <div className="strand explosion" key={index} style={{ '--index': index + 1 }}>
          <div className="strand__node explosion-node"></div>
          <div className="strand__node explosion-node"></div>
          <div className="rod"></div>
        </div>
      ))}
    </div>
  );
};

export default DNAExplosion;
