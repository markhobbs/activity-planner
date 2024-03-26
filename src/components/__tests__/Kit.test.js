// kit.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Kit from '../Kit';
import ErrorBoundary from './ErrorBoundary';

it('renders correctly', () => {
  const items = [
    { aparatus: 'Item 1' },
    { aparatus: 'Item 2' },
    // Add more test data as needed
  ];

  const component = renderer.create(<kit items={items} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the list of items', () => {
  const items = [
    { aparatus: 'Item 1' },
    { aparatus: 'Item 2' },
    // Add more test data as needed
  ];

  const { getByText } = render(
    <ErrorBoundary>
      <Kit items={items} />
    </ErrorBoundary>);

  items.forEach((item) => {
    const itemElement = getByText(item.aparatus);
    expect(itemElement).toBeInTheDocument();
  });
});

