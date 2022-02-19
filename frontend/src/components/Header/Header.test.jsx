import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should display the scheduling app title', () => {
    render(<Header location="" />);
    expect(screen.getByRole('heading', { name: /Scheduling App/i })).toBeInTheDocument();
  });
  it('should display the admin page title', () => {
    render(<Header location="/admin" />);
    expect(screen.getByRole('heading', { name: /Admin Page/i })).toBeInTheDocument();
  });
  it('should display the Member Availability page title', () => {
    render(<Header location="/user" />);
    expect(screen.getByRole('heading', { name: /Member Availability/i })).toBeInTheDocument();
  });
  it('should display about title', () => {
    render(<Header location="/about" />);
    expect(screen.getByRole('heading', { name: /Developer Info/i })).toBeInTheDocument();
  });
});
