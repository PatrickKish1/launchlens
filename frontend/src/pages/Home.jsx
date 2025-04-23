import React, { useState } from 'react';
import { 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Box,
    Card,
    CardMedia
} from '@mui/material';
import { QUIZ_QUESTIONS } from '../backend/questions';
import QuizModal from '../components/QuizModal';
import ResultsModal from '../components/ResultsModal';
import { ReactComponent as Logo } from '../assets/logo.svg';

const HomePage = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  const handleStartQuiz = () => {
    setShowWelcomeModal(true);
  };

  const handleWelcomeConfirm = () => {
    setShowWelcomeModal(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = (results) => {
    setShowQuiz(false);
    setQuizResults(results);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    // Reset to initial state so user can take quiz again
  };

  return (
    <Box sx={{ 
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      {/* Logo and Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: -10, mb: -2 }}>
        <Logo style={{ width: 180, height: 180 }} />
      </Box>
      
      {/* Hero Image */}
      <Card sx={{ maxWidth: 700, mb: 5 }}>
        <CardMedia
          component="img"
          height="400"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          alt="Business growth illustration"
        />
      </Card>
      
      {/* Get Started Button */}
      <Button 
        onClick={handleStartQuiz} 
        variant="contained" 
        color="primary"
        size="large"
        sx={{ mb: 4, ":hover": {
            bgcolor: 'secondary.main'
        } }}
      >
        Ready to Get Started
      </Button>
      
      {/* Welcome Modal */}
      <Dialog open={showWelcomeModal} onClose={() => setShowWelcomeModal(false)}>
        <DialogTitle>Hey there traveler!</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Let's find out what kind of support would work best for you.
          </Typography>
          <Typography variant="body1">
            We'll help you determine if you should outsource, build a team, or keep doing it yourself.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowWelcomeModal(false)}>
            Not Now
          </Button>
          <Button onClick={handleWelcomeConfirm} variant="contained" color="primary" sx={{
            ":hover": {
            bgcolor: 'secondary.main'
        }
          }}>
            Start Assessment
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal 
          questions={QUIZ_QUESTIONS} 
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      )}
      
      {/* Results Modal */}
      {showResults && (
        <ResultsModal 
          results={quizResults}
          onClose={handleCloseResults}
        />
      )}
    </Box>
  );
};

export default HomePage;