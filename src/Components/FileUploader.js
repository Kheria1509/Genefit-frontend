import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Checkbox,
  Link,
  CircularProgress,
} from '@mui/material';
import FileUploader from './FileUploader'; // Adjust path as needed

export default function MainPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Box
      sx={{
        backgroundColor: '#040f1b',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {/* File uploader and Terms & Conditions */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        {/* File Uploader on the left */}
        <Box
          sx={{
            flex: '0 0 60%',
          }}
        >
          <FileUploader />
        </Box>

        {/* Terms & Conditions and Submit Button on the right */}
        <Box
          sx={{
            flex: '0 0 40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Terms & Conditions */}
          <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              sx={{
                color: '#06cbaa',
                '&.Mui-checked': {
                  color: '#25add6',
                },
              }}
            />
            <Typography variant="body1" sx={{ color: '#fff', ml: 1 }}>
              I accept the{' '}
              <Link
                href="#"
                sx={{
                  color: '#25add6',
                  textDecoration: 'underline',
                  '&:hover': {
                    color: '#06cbaa',
                  },
                }}
              >
                Terms and Conditions
              </Link>
            </Typography>
          </Box>

          {/* Loading Spinner and Submit Button */}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: '#25add6',
                position: 'relative',
                marginBottom: '20px',
                zIndex: 1,
              }}
            />
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#25add6',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#06cbaa',
              },
              marginTop: '20px',
            }}
            onClick={handleSubmit}
            disabled={loading || !termsAccepted}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
