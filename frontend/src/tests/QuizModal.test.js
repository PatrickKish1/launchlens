import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuizModal from '../components/QuizModal';
// eslint-disable-next-line no-unused-vars
import { QUIZ_QUESTIONS } from '../backend/questions';

const mockQuestions = [
  {
    id: 1,
    text: "Question 1",
    options: [
      { value: "opt1", label: "Option 1" },
      { value: "opt2", label: "Option 2" }
    ]
  },
  {
    id: 2,
    text: "Question 2",
    options: [
      { value: "opt3", label: "Option 3" },
      { value: "opt4", label: "Option 4" }
    ]
  }
];

describe('QuizModal', () => {
  const mockOnComplete = jest.fn();

  it('renders first question initially', () => {
    render(<QuizModal questions={mockQuestions} onComplete={mockOnComplete} />);
    expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
  });

  it('navigates between questions', () => {
    render(<QuizModal questions={mockQuestions} onComplete={mockOnComplete} />);
    
    // Answer first question
    fireEvent.click(screen.getByLabelText(/Option 1/i));
    fireEvent.click(screen.getByText(/Next/i));
    
    expect(screen.getByText(/Question 2/i)).toBeInTheDocument();
    
    // Go back
    fireEvent.click(screen.getByText(/Previous/i));
    expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
  });

  it('calls onComplete with results when submitted', () => {
    render(<QuizModal questions={mockQuestions} onComplete={mockOnComplete} />);
    
    // Answer first question
    fireEvent.click(screen.getByLabelText(/Option 1/i));
    fireEvent.click(screen.getByText(/Next/i));
    
    // Answer second question
    fireEvent.click(screen.getByLabelText(/Option 3/i));
    fireEvent.click(screen.getByText(/Submit/i));
    
    expect(mockOnComplete).toHaveBeenCalled();
    expect(mockOnComplete.mock.calls[0][0]).toHaveProperty('recommendation');
  });

  it('disables next button when no answer selected', () => {
    render(<QuizModal questions={mockQuestions} onComplete={mockOnComplete} />);
    expect(screen.getByText(/Next/i)).toBeDisabled();
  });
});