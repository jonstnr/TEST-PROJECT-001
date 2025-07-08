import { render, screen } from '@testing-library/react';
import GroupsList from './GroupsList';

test('renders GroupsList component', () => {
  render(<GroupsList />);
  expect(screen.getByText(/Groups\/Topics will be listed here/i)).toBeInTheDocument();
});
