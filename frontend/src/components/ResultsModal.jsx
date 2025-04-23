import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button, Box } from '@mui/material';

const recommendationText = {
  diy: {
    title: "DIY Approach Recommended",
    description: "Based on your answers, you're comfortable handling things yourself and prefer minimal support. You might benefit from tools and resources rather than full support services."
  },
  outsource: {
    title: "Outsourcing Recommended",
    description: "Your responses suggest you could benefit from outsourcing specific tasks or getting guidance while maintaining control over your business."
  },
  team: {
    title: "Build a Team Recommended",
    description: "It seems you're ready to delegate and scale. Building a team or working with comprehensive service providers would help you grow efficiently."
  }
};

const ResultsModal = ({ results, onClose }) => {
  const { recommendation } = results;
  const { title, description } = recommendationText[recommendation] || recommendationText.diy;

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Your Assessment Results</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
            Remember: This is just a recommendation based on your answers. The best approach depends on your specific situation.
          </Typography>
        </Box>
      </DialogContent>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button onClick={onClose} variant="contained" color="primary" sx={{
            ":hover": {
            bgcolor: 'secondary.main'
        }
        }}>
          Got It!
        </Button>
      </Box>
    </Dialog>
  );
};

export default ResultsModal;