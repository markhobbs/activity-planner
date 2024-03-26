// Header.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import ErrorBoundary from './ErrorBoundary';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<ErrorBoundary><Header /></ErrorBoundary>);
    // If no errors occur during rendering, the test passes
  });

  it('displays the app title', () => {
    const { getByText } = render(<ErrorBoundary><Header /></ErrorBoundary>);
    const titleElement = getByText(process.env.REACT_APP_TITLE);
    expect(titleElement).toBeInTheDocument();
  });

  it('contains a link to the home page', () => {
    const { getByText } = render(<ErrorBoundary><Header /></ErrorBoundary>);
    const homeLink = getByText(process.env.REACT_APP_TITLE);
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('contains a link to the plan page', () => {
    const { getByText } = render(<ErrorBoundary><Header /></ErrorBoundary>);
    const planLink = getByText('Basket'); // Assuming 'Basket' is the link text
    expect(planLink).toHaveAttribute('href', '/plan');
  });
});
