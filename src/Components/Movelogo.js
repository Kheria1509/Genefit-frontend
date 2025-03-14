import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import logo from "../assets/Logo.png"; // Update this with the correct path to your logo

const AnimatedLogo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before transitioning the logo to the top-left
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0); // 2 seconds delay for the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: loading ? "absolute" : "fixed", // Start absolute and fix it after moving
        top: loading ? "50%" : "30px", // Center initially, move to 30px from the top after loading
        left: loading ? "50%" : "20px", // Center initially, move to 20px from the left after loading
        transform: loading ? "translate(-50%, -50%)" : "none", // Centering transform
        display: "flex",
        alignItems: "center",
        transition: "all 2s ease", // Smooth transition for the movement
        zIndex: 10, // Ensure it stays on top
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "200px",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default AnimatedLogo;
