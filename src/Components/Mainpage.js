import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
  Checkbox,
  CircularProgress,
  Link,
  TextField,
} from "@mui/material";
import logo from "../assets/Logo.png";
import "./Mainpage.css";
import FileUploader from "./FileUploader";
import Loader from "./Loader";
import DNAAnimation from "./DNAAnimation";
import DNAExplosion from "./DNAExplosion";

export default function Mainpage() {
  const [loading, setLoading] = useState(true); // Show loader initially
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [activity_level, setActivityLevel] = useState("");
  const [diagnosed_ailment, setDiagnosed] = useState("");
  const [sex, setSex] = useState("");
  const [showDna, setShowDna] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [body_weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Simulate loading for 3 seconds on page load
  setTimeout(() => {
    setLoading(false); // Loader is hidden after this
  }, 3000);

  const handleSubmit = async () => {
    if (!termsAccepted) {
      alert("Please accept the terms before submitting.");
      return;
    }
  
    if (
      !name ||
      !age ||
      !body_weight ||
      !height ||
      !activity_level ||
      !diagnosed_ailment ||
      !sex
    ) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
  
    // check body weight and height are numbers
    if (isNaN(body_weight) || isNaN(height)) {
      alert("Body weight and height must be numbers.");
      return;
    }
  
    // check age is a number
    if (isNaN(age)) {
      alert("Age must be a number.");
      return;
    }
  
    // Prepare data to send to the API
    const url =
      "https://98ef-2401-4900-55b7-a240-7153-b0bc-7d07-f1c5.ngrok-free.app/generate_recommendations";
    const data = {
      name: name,
      age: parseInt(age),
      body_weight: parseInt(body_weight),
      height: parseInt(height),
      activity_level: activity_level,
      diagnosed_ailment: diagnosed_ailment,
      gender: sex,
    };
  
    console.log(data);
  
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        // Handle non-200 responses
        const errorMessage = await res.text();
        alert(`Error: ${errorMessage}`);
        return;
      }
  
      const responseData = await res.json(); // Assuming the API returns JSON
      console.log(responseData);
      // Handle the successful response
      alert("Form submitted successfully.");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };
  

  return (
    <>
      {/* Loader */}
      {loading && <Loader />}
      {/* DNA Animation: Show when user submits the form */}
      {showDna && <DNAAnimation />}

      {/* DNA Explosion: Show after DNA animation completes */}
      {showExplosion && <DNAExplosion />}

      {/* Form Box: Only show when loader is done and no animation is active */}
      {!loading && !showDna && !showExplosion && (
        <Box
          sx={{
            backgroundColor: "#040f1b",
            minHeight: "100vh",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
            fontFamily: "Roboto, sans-serif",
            position: "relative",
          }}
        >
          {/* Logo in Top Left */}
          <Box
            sx={{
              position: "absolute",
              top: "30px",
              left: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "auto" }}
            />
          </Box>

          {/* Header with Gradient */}
          <Box
            sx={{
              background:
                "linear-gradient(to right, #06cbaa, var(--tw-gradient-to-position))",
              width: "100%",
              textAlign: "center",
              padding: "20px",
              borderRadius: "8px",
              marginTop: "100px",
              marginBottom: "30px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginTop: "20px",
                background: "linear-gradient(to right, #25add6, #06cbaa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "'Lora', serif",
                fontSize: "2.5rem",
                width: "80%",
                lineHeight: "1.5",
                textAlign: "left",
              }}
            >
              Upload Your Genetic Data and Discover Your Unique Genetic Insights
            </Typography>
          </Box>

          {/* Cards in Horizontal Layout */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1200px",
              gap: "20px",
            }}
          >
            {/* First Card: Name, Diagnosed, and Activity Level */}
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#13212c",
                padding: "20px",
                marginRight: "20px",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                border: "1px solid linear-gradient(to right, #25add6, #06cbaa)",
              }}
            >
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="name-input"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Name
                </InputLabel>
                <OutlinedInput
                  id="name-input"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <TextField
                  id="diagnosed-input"
                  label="Diagnosed History (comma separated, if any)"
                  value={diagnosed_ailment}
                  onChange={(e) => setDiagnosed(e.target.value)}
                  multiline
                  rows={4} // Set the number of rows for the text area
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "#fff", // Text color inside textarea
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#0a0b0a", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#25add6", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#06cbaa", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff", // Label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#06cbaa", // Label color on focus
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="activity-select"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Activity Level
                </InputLabel>
                <Select
                  id="activity-select"
                  value={activity_level}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  label="Activity Level"
                  sx={{
                    backgroundColor: "#1a2a33",
                    borderColor: "#fff",
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="moderate">Moderate</MenuItem>
                  <MenuItem value="intense">Intense</MenuItem>
                </Select>
              </FormControl>
            </Card>

            {/* Second Card: Age, Sex, Weight, and Height */}
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#13212c",
                padding: "20px",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="age-input"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Age
                </InputLabel>
                <OutlinedInput
                  id="age-input"
                  label="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  sx={{
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="sex-select"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Sex
                </InputLabel>
                <Select
                  id="sex-select"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  label="Sex"
                  sx={{
                    backgroundColor: "#1a2a33",
                    borderColor: "#fff",
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="weight-input"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Weight
                </InputLabel>
                <OutlinedInput
                  id="weight-input"
                  label="Weight"
                  value={body_weight}
                  onChange={(e) => setWeight(e.target.value)}
                  sx={{
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="height-input"
                  sx={{
                    color: "#fff",
                    "&.Mui-focused": {
                      color: "#fff",
                      background: "#13212c",
                      padding: "0px 10px",
                    },
                  }}
                >
                  Height
                </InputLabel>
                <OutlinedInput
                  id="height-input"
                  label="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  sx={{
                    color: "#fff",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#25add6",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#06cbaa",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0a0b0a",
                    },
                  }}
                />
              </FormControl>
            </Card>
          </Box>

          {/* File Uploader and Terms */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "1200px",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                flex: "0 0 60%",
                // backgroundColor: "#13212c",
                // padding: "20px",
                borderRadius: "8px",
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "1px solid linear-gradient(to right, #25add6, #06cbaa)",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <FileUploader />
            </Box>

            <Box
              sx={{
                flex: "0 0 40%",
                // backgroundColor: "#13212c",
                padding: "20px",
                // borderRadius: "8px",
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "1px solid linear-gradient(to right, #25add6, #06cbaa)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                By uploading your genetic data, you agree to our{" "}
                <Link href="#" color="#06cbaa">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" color="#06cbaa">
                  Privacy Policy
                </Link>
                .
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  sx={{
                    color: "#06cbaa",
                    "&.Mui-checked": { color: "#06cbaa" },
                  }}
                />
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  I accept the terms and conditions
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  marginTop: "20px",
                  fontFamily: "'Lora', serif",
                  backgroundColor: "#13212c",
                  border: "1px solid #25add6",
                  maxWidth: "200px",

                  "&:hover": {
                    transform: "scale(1.05)",
                    border: "1.5px solid #06cbaa",
                    transition: "all 0.3s",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
