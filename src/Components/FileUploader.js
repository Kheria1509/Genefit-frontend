import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FileUploader() {
  const { getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles, fileRejections } = useDropzone({
    accept: {
      'image/*': [],
      'application/pdf': [],
    },
    onDrop: (acceptedFiles) => {
      console.log('Files dropped:', acceptedFiles);
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
      {...getRootProps()}
    >
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
        Drag & Drop  or click to select
      </Typography>

      {acceptedFiles.length > 0 && (
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontStyle: 'italic',
            mb: 2,
          }}
        >
          {acceptedFiles.map(file => file.name).join(', ')}
        </Typography>
      )}

      {fileRejections.length > 0 && (
        <Typography
          variant="body1"
          sx={{
            color: '#ff3d00',
            mb: 2,
          }}
        >
          Some files were rejected.
        </Typography>
      )}

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
        onClick={() => alert('Files Upload successfully.')}
      >
        Upload
      </Button>
    </Box>
  );
}
