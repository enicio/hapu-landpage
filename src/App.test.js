import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Easily create or join a local nanny share with Hapu/i);
  expect(linkElement).toBeInTheDocument();
});
