import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FileUploader(props) {
  const { setCsvresult } = props;
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleupload = async () => {
    if (!selectedFile) {
      alert('Please select a file before uploading');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setIsUploading(true); // Start upload
      const res = await fetch('https://98ef-2401-4900-55b7-a240-7153-b0bc-7d07-f1c5.ngrok-free.app/predict_from_csv', {
        method: 'POST',
        applicationType: 'application/json',
        body: formData,
      });
      
      const data = await res.json(); // Assuming the response is JSON
      console.log('Upload response:', data);
      setCsvresult(data); // Use setCsvresult to update state
      setIsUploading(false); // Stop upload
    } catch (error) {
      console.error('Error uploading file:', error);
      setIsUploading(false); // Stop upload on error
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: { 'text/csv': [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]); // Save the selected file
        console.log('File selected:', acceptedFiles[0]);
      }
    },
  });

  const isDragRejectStyle = isDragReject ? { borderColor: '#ff3d00' } : {};
  const isDragActiveStyle = isDragActive ? { borderColor: '#06cbaa' } : {};

  return (
    <Box
      sx={{
        backgroundColor: '#13212c',
        padding: '20px',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        margin: '20px auto',
        border: '2px dashed',
        borderColor: isDragActive ? '#06cbaa' : '#25add6',
        ...isDragRejectStyle,
      }}
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: 40, color: '#fff', mb: 2 }} />
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontFamily: "'Lora', serif",
            mb: 2,
          }}
        >
          Drag & Drop or click to select
        </Typography>

        {selectedFile ? (
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              fontStyle: 'italic',
              mb: 2,
            }}
          >
            {selectedFile.name}
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              fontStyle: 'italic',
              mb: 2,
            }}
          >
            No file selected
          </Typography>
        )}
      </div>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#13212c',
          border: '1px solid white',
          color: '#fff',
          '&:hover': {
            border: '1px solid #06cbaa',
            transform: 'scale(1.05)',
            transition: '0.3s',
          },
          marginTop: '20px',
        }}
        onClick={handleupload}
        disabled={isUploading || !selectedFile}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </Box>
  );
}
