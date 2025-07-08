import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders LoginForm component', () => {
  render(<LoginForm />);
  expect(screen.getByText(/Login form will be here/i)).toBeInTheDocument();
});
