import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Burger from '../Burger';

describe('<Burger /> tests', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Burger open={false} setOpen={() => {}} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('<Burger /> tests', () => {
    it('should call setOpen when clicked', () => {
      const setOpenMock = jest.fn();
      const { getByTestId } = render(<Burger open={false} setOpen={setOpenMock} />);
  
      const burgerButton = getByTestId('burger-button');
      fireEvent.click(burgerButton);
  
      expect(setOpenMock).toHaveBeenCalledTimes(1);
    });
});