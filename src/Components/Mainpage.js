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
} from "@mui/material";
import logo from "../assets/Logo.png";
import "./Mainpage.css";
import FileUploader from "./FileUploader";

export default function Mainpage() {
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    if (termsAccepted) {
      setLoading(true);
      // Simulate a delay for submission
      setTimeout(() => {
        setLoading(false);
        alert("Submitted successfully!");
      }, 2000);
    } else {
      alert("Please accept the terms before submitting.");
    }
  };

  return (
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
        <img src={logo} alt="logo" style={{ width: "200px", height: "auto" }} />
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
        {/* First Card: Name and Email */}
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
            <InputLabel htmlFor="name-input" sx={{
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff",
                  background:"#13212c",
                  padding:"0px 10px",
                },
              }}>
              Name
            </InputLabel>
            <OutlinedInput
              id="name-input"
              label="Name"
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
            <InputLabel htmlFor="email-input" sx={{
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff",
                  background:"#13212c",
                  padding:"0px 10px",
                },
              }}>
              Email
            </InputLabel>
            <OutlinedInput
              id="email-input"
              label="Email"
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
            <InputLabel htmlFor="sex-select" sx={{
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff",
                  background:"#13212c",
                  padding:"0px 10px",
                },
              }}>
              Sex
            </InputLabel>
            <Select
              id="sex-select"
              label="Sex"
              defaultValue=""
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
        </Card>

        {/* Second Card: Age, Weight, and Height */}
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
              Weight (kg)
            </InputLabel>
            <OutlinedInput
              id="weight-input"
              label="Weight"
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
              Height (cm)
            </InputLabel>
            <OutlinedInput
              id="height-input"
              label="Height"
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
            justifyContent:'left',
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
            alignItems:"left",
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
            </Link>.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              sx={{ color: "#06cbaa", "&.Mui-checked": { color: "#06cbaa" } }}
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
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
