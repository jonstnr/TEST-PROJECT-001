import { render, screen } from '@testing-library/react';
import FileUpload from './FileUpload';

test('renders FileUpload component', () => {
  render(<FileUpload />);
  expect(screen.getByText(/File upload UI will be here/i)).toBeInTheDocument();
});
