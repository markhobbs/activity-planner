// ColorChoice.test.js
import ColorChoice from '../ColorChoice';

it('returns the correct color for different values', () => {
  expect(ColorChoice(100)).toBe('rgb(245, 255, 162)');
  expect(ColorChoice(200)).toBe('rgb(170, 255, 162)');
  expect(ColorChoice(300)).toBe('rgb(255, 139, 139)');
  expect(ColorChoice(400)).toBe('rgb(159, 209, 255)');
});

it('returns default color for unknown values', () => {
    expect(ColorChoice(500)).toBe('rgb(159, 209, 255)'); // Default color
});
