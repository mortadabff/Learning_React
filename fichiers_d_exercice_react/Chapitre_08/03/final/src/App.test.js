import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome', () => {
  render(<App />);
  const textElement = screen.getByText(/Welcome/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Learn React', () => {
  render(<App />)
  const textElement = screen.getByText("Learn React");
  expect(textElement).toBeInTheDocument()
})

