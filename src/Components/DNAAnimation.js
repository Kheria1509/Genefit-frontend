import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './DNAAnimation.css';

const DNAAnimation = () => {
  const [loadingText, setLoadingText] = useState("Wait while analyzing your DNA...");

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

    // Change loading text every 3 seconds
    const textInterval = setInterval(() => {
      setLoadingText((prevText) =>
        prevText === "Wait while analyzing your DNA..." ? "Please wait! it may take a few minutes..." : "Wait while analyzing your DNA..."
      );
    }, 5000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className='dna-body'>
      <div className="dna" style={{ '--total': 13 }}>
        {[...Array(13).keys()].map(index => (
          <div className="strand" key={index} style={{ '--index': index + 1 }}>
            <div className="strand__node"></div>
            <div className="strand__node"></div>
          </div>
        ))}
      </div>

      {/* Loading Text */}
      <div className="loading-text">
        <Typography
          variant="h6"
          sx={{
            marginTop: '40px',
            color: '#25add6',
            fontSize: '1.5rem',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}
        >
          {loadingText}
        </Typography>
      </div>
    </div>
  );
};

export default DNAAnimation;
