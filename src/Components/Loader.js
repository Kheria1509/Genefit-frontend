// src/Components/Loader.js
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import logo from '../assets/Logo.png'; // Ensure you have a logo file in this path
import './Loader.css'; // Import the CSS file for animations
import AnimatedLogo from './Movelogo';

const Loader = ({ onLoaded }) => {
  const [loaded, setLoaded] = useState(false);
  const [animation, setAnimation] = useState(false);

  //each 100 ms switch the animation
    useEffect(() => {
        const timer = setInterval(() => {
        setAnimation(!animation);
        }, 50);
    
        return () => clearInterval(timer);
    }, [animation]);
    
    useEffect(() => {
        // Simulate a delay before transitioning the logo to the top-left
        const timer = setTimeout(() => {
        setLoaded(true);
        onLoaded();
        }, 3000); // 2 seconds delay for the animation
    
        return () => clearTimeout(timer);
    }, [onLoaded]);
  



  return (
    <>
    { !loaded &&
        <Box className={`loader-container ${loaded ? 'loaded' : ''}`}>
      <img src={logo} alt="logo" className="loader-logo" />
      <div>

      <CircularProgress size={30} sx={{ color: animation? "#06D6A0": "#25add6", marginTop: "35px" }} />
        

       
      </div>
    </Box>}
    
    </>
  );
};

export default Loader;
