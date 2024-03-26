// Card.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '../Card';
import ErrorBoundary from './ErrorBoundary';

it('renders correctly', () => {
  const item = {
    id: 1,
    title: 'Sample Title',
    img: 'sample-image.jpg',
    rep: 10,
    headline: 'Sample headline',
    kit: null,
    featured: true,
    completed: false,
    rewards: null,
  };

  const component = renderer.create(
    <ErrorBoundary>
      <Card item={item} />
    </ErrorBoundary>
    );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// check if the class changes when the component is hovered:
it('changes class when hovered', () => {
    const item = {
      id: 1,
      title: 'Sample Title',
      img: 'sample-image.jpg',
      rep: 10,
      headline: 'Sample headline',
      kit: null,
      featured: true,
      completed: false,
      rewards: null,
    };
  
    const { getByText } = render(
      <ErrorBoundary>
        <Card item={item} />
      </ErrorBoundary>);
    const cardElement = getByText('Sample Title');
  
    fireEvent.mouseEnter(cardElement);
    expect(cardElement).toHaveClass('card--featured');
  
    fireEvent.mouseLeave(cardElement);
    expect(cardElement).not.toHaveClass('card--featured');
  });