// CardActions.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardActions from '../CardActions'; // Adjust the path to your actual component


describe('CardActions component', () => {
  it('should call addPlanItem when Add button is clicked', () => {

    const mockAddPlanItem = jest.fn();
    const { getByText } = render(
      <CardActions
        actionID={1}
        completed={false}
        addPlanItem={mockAddPlanItem}
      />
    );
    const addButton = getByText('Add');
    fireEvent.click(addButton);
    expect(mockAddPlanItem).toHaveBeenCalledWith(1);
  });

  it('should call handlePurchase when Kit link is clicked', () => {
    const mockHandlePurchase = jest.fn();
    const { getByText } = render(
      <CardActions
        actionID={2}
        completed={false}
        kit="Some Kit"
        addPlanItem={() => {}}
      />
    );
    const kitLink = getByText('*Kit');
    fireEvent.click(kitLink);
    expect(mockHandlePurchase).toHaveBeenCalledWith(2);
  });
});
