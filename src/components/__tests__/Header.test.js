import React from 'react';
import { render } from '@testing-library/react';
import Heading from '../Heading';
import '@testing-library/jest-dom/extend-expect';

describe('Heading component', () => {
    it('renders the heading correctly', () => {
        const testHeading = 'Hello, World!';
        const { getByText } = render(<Heading heading={testHeading} />);
        const headingElement = getByText(testHeading);
        expect(headingElement).toBeInTheDocument();
    });
});