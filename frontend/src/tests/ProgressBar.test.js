import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar.jsx';

describe('ProgressBar', () => {
  it('displays correct progress and question count', () => {
    render(<ProgressBar progress={50} current={2} total={4} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(screen.getByText(/Question 2 of 4/i)).toBeInTheDocument();
  });

  it('handles edge cases', () => {
    render(<ProgressBar progress={0} current={0} total={0} />);
    expect(screen.getByText(/Question 0 of 0/i)).toBeInTheDocument();
  });
});