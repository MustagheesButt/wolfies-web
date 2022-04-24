import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('testing content on home page', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Expertise! From the experts/i);
  expect(linkElement).toBeInTheDocument();
});
