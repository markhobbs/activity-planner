import React from 'react';
import { render, screen } from '@testing-library/react'
import Footer from '../Footer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test("Footer renders successfully", () => {
    render(<Footer/>);
    const element = screen.getByText(/2024/i);
    expect(element).toBeInTheDocument();
})