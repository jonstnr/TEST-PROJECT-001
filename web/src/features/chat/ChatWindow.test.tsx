import { render, screen } from '@testing-library/react';
import ChatWindow from './ChatWindow';

test('renders ChatWindow component', () => {
  render(<ChatWindow />);
  expect(screen.getByText(/Chat window will be here/i)).toBeInTheDocument();
});
