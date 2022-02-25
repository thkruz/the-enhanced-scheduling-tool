import { render, screen } from '@testing-library/react';
import Admin from './Admin';

describe('testing the Administration on the /admin route', () => {

  const setup = () => {
    render(<Admin />);
  };

  it('should have the option to add a new member displayed', async () => {
    setup();
    const textToFind = "+ Add New Member";
    const findText = await screen.findByText(textToFind);
    expect(findText).toBeInTheDocument();
  });
});