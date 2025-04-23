import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box
} from '@mui/material';
import ProgressBar from './ProgressBar';

const QuizModal = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(calculateResults(answers));
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
  };

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: e.target.value
    });
  };

  const calculateResults = (answers) => {
    // Simple scoring logic - you can enhance this
    const scores = {
      diy: 0,
      outsource: 0,
      team: 0
    };
    
    Object.values(answers).forEach(answer => {
      if (['solo', 'self', 'minimal'].includes(answer)) scores.diy += 1;
      if (['part-time', 'guidance', 'mid'].includes(answer)) scores.outsource += 1;
      if (['team', 'handled', 'premium'].includes(answer)) scores.team += 1;
    });
    
    // Determine the recommendation
    const maxScore = Math.max(...Object.values(scores));
    const recommendation = Object.keys(scores).find(key => scores[key] === maxScore);
    
    return {
      recommendation,
      scores
    };
  };

  return (
    <Dialog open={true} fullWidth maxWidth="sm">
      <DialogTitle>Business Assessment</DialogTitle>
      <DialogContent>
        <ProgressBar progress={progress} current={currentQuestionIndex + 1} total={questions.length} />
        
        <Typography variant="h6" gutterBottom>
          {currentQuestion.text}
        </Typography>
        
        <RadioGroup
          value={answers[currentQuestionIndex] || ''}
          onChange={handleAnswerChange}
        >
          {currentQuestion.options.map((option, i) => (
            <FormControlLabel
              key={i}
              value={option.value}
              control={<Radio />}
              label={option.label}
              sx={{ mb: 1 }}
            />
          ))}
        </RadioGroup>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3}}>
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!answers[currentQuestionIndex]}
            sx={{
                ":hover": {
            bgcolor: 'secondary.main'
        }
            }}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;