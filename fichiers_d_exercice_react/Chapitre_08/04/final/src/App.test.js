import { render, screen, fireEvent } from '@testing-library/react';
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

test('renders 3 elements button', () => {
  render(<App />)
  const buttonElements = screen.getAllByRole('button')
  expect(buttonElements.length).toBe(3)
})

test('renders title "click me !"', () => {
  render(<App />)
  const buttonElements = screen.getAllByRole('button')
  expect(buttonElements[0].textContent).toBe("click me !")
})


test('renders title "Learn Angular" after click event', () => {
  render(<App />)
  const heading1 = screen.getByTestId("title")
  const buttonElements = screen.getAllByRole('button')
  fireEvent.click(buttonElements[1])
  expect(heading1.textContent).toBe("Learn Angular")
})
