import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const ProgressBar = ({ progress, current, total }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
      <Typography variant="caption" sx={{ mt: 1, display: 'block', textAlign: 'right' }}>
        Question {current} of {total}
      </Typography>
    </Box>
  );
};

export default ProgressBar;