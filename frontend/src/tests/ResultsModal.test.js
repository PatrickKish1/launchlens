import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultsModal from '../components/ResultsModal.jsx';

const mockResults = {
  recommendation: "outsource",
  scores: {
    diy: 1,
    outsource: 3,
    team: 2
  }
};

describe('ResultsModal', () => {
  const mockOnClose = jest.fn();

  it('displays correct recommendation', () => {
    render(<ResultsModal results={mockResults} onClose={mockOnClose} />);
    expect(screen.getByText(/Outsourcing Recommended/i)).toBeInTheDocument();
  });

  it('calls onClose when button is clicked', () => {
    render(<ResultsModal results={mockResults} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText(/Got It!/i));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('handles all recommendation types', () => {
    const { rerender } = render(
      <ResultsModal results={{ recommendation: "diy" }} onClose={mockOnClose} />
    );
    expect(screen.getByText(/DIY Approach Recommended/i)).toBeInTheDocument();
    
    rerender(<ResultsModal results={{ recommendation: "team" }} onClose={mockOnClose} />);
    expect(screen.getByText(/Build a Team Recommended/i)).toBeInTheDocument();
  });
});