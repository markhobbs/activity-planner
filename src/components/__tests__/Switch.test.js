// Switch.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '../Switch'; // Adjust the path to your actual component
import ErrorBoundary from './ErrorBoundary';

describe('Switch component', () => {
  it('should toggle state when checkbox is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <ErrorBoundary>
        <Switch label="Toggle" onChange={mockOnChange} />
      </ErrorBoundary>
      
    );
    const checkbox = getByTestId('switcher');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should display the correct label', () => {
    const { getByText } = render(
      <ErrorBoundary>
      <Switch label="Toggle" onChange={() => {}} />
      </ErrorBoundary>
    );
    const label = getByText('Toggle');
    expect(label).toBeInTheDocument();
  });
});
