import { render, screen } from '@testing-library/react';
import About from './About';

describe('testing the Developers on the /about route', () => {
  const setup = () => {
    render(<About />);
  };

  it('should display some text', async () => {
    setup();
    expect(
      await screen.findByText('The following developers contributed to the development of this application.')
    ).toBeInTheDocument();
  });
});
