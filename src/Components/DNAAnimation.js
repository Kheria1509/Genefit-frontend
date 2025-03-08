import React, { useEffect } from 'react';
import './DNAAnimation.css';

const DNAAnimation = () => {
  useEffect(() => {
    // Set random colors
    const COLORS = ['hsl(44, 98%, 60%)', 'hsl(197, 50%, 44%)', 'hsl(300, 100%, 100%)', 'hsl(331, 76%, 50%)'];

    const NODES = document.querySelectorAll('.strand__node');
    NODES.forEach(NODE => {
      NODE.style.setProperty('--bg', COLORS[Math.floor(Math.random() * COLORS.length)]);
    });

    // Push the delays in if `calc()` is not supported
    if (!CSS.supports('top: calc(sin(1) * 1px)')) {
      const STRANDS = [...document.querySelectorAll('.strand')];
      for (let s = 0; s < STRANDS.length; s++) {
        const DELAY = Math.sin(((Math.PI / 180) * 45) * ((s + 1) / STRANDS.length));
        STRANDS[s].style.setProperty('--delay', `calc((${DELAY} * var(--speed)) * -1s)`);
      }
    }
  }, []);

  return (
    <div className='dna-body' >
        <div className="dna" style={{ '--total': 13 }}>
      {[...Array(13).keys()].map(index => (
        <div className="strand" key={index} style={{ '--index': index + 1 }}>
          <div className="strand__node"></div>
          <div className="strand__node"></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DNAAnimation;
