import Counter from "../components/Counter"
import React from "react"
import { fireEvent,  render, screen } from '@testing-library/react';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const init = screen.getByTestId("count");
  expect(init.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  const inc = screen.getByRole('button', { name: '+' });
  fireEvent.click(inc);
  const val = screen.getByTestId("count");
  expect(val.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  const dec = screen.getByRole('button', { name: '-' });
  fireEvent.click(dec);
  const val = screen.getByTestId("count");
  expect(val.textContent).toBe("-1");
});
