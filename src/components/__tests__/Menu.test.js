// Menu.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from '../Menu'; // Adjust the path to your actual component
import ErrorBoundary from './ErrorBoundary';

describe('Menu component', () => {
  it('should toggle menu when Burger button is clicked', () => {
    const { getByTestId } = render(
        <ErrorBoundary>
            <Menu />
        </ErrorBoundary>);
    const burgerButton = getByTestId('burger-button');

    fireEvent.click(burgerButton);
    expect(burgerButton).toHaveAttribute('open', 'true');

    fireEvent.click(burgerButton);
    expect(burgerButton).toHaveAttribute('open', 'false');
  });

  it('should navigate to different links when MenuItems are clicked', () => {
    const { getByText } = render(
        <ErrorBoundary>
            <Menu />
        </ErrorBoundary>);
    const activityLink = getByText('Activitys');
    const plannerLink = getByText('Planner');
    const awardsLink = getByText('Awards');

    fireEvent.click(activityLink);
    // Add assertions for navigation behavior (e.g., check if the correct route is pushed)

    fireEvent.click(plannerLink);
    // Add assertions for navigation behavior

    fireEvent.click(awardsLink);
    // Add assertions for navigation behavior
  });
});
