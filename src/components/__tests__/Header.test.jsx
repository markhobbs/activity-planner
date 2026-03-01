import { render } from '@testing-library/react';
import Heading from '../Heading';
import { describe, it, expect } from 'vitest';

describe('Heading component', () => {
    it('renders the heading correctly', () => {
        const testHeading = 'Hello, World!';
        const { getByText } = render(<Heading heading={testHeading} />);
        const headingElement = getByText(testHeading);
        expect(headingElement).toBeInTheDocument();
    });
});