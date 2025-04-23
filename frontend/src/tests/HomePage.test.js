import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../pages/Home.jsx';
// eslint-disable-next-line no-unused-vars
import { QUIZ_QUESTIONS } from '../backend/questions.js';

jest.mock('../backend/questions.js', () => ({
  QUIZ_QUESTIONS: [
    {
      id: 1,
      text: "Test question",
      options: [
        { value: "test", label: "Test option" }
      ]
    }
  ]
}));

describe('HomePage', () => {
  it('renders welcome modal initially', () => {
    render(<HomePage />);
    expect(screen.getByText(/Hey there traveler!/i)).toBeInTheDocument();
  });

  it('starts quiz when button is clicked', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByText(/Start Assessment/i));
    expect(screen.getByText(/Business Assessment/i)).toBeInTheDocument();
  });

  it('shows results when quiz is completed', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByText(/Start Assessment/i));
    fireEvent.click(screen.getByText(/Test option/i));
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Your Assessment Results/i)).toBeInTheDocument();
  });
});