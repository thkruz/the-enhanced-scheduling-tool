import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Admin from './Admin';

describe('testing the Administration on the /admin route', () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );
  };

  it('should have a button to represent uploading new data', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-ud');
    expect(foundButton).toBeInTheDocument();
  });

  it('should have a button to represent exporting current data', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-ed');
    expect(foundButton).toBeInTheDocument();
  });

  it('should have a button to represent adding a new user', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-au');
    expect(foundButton).toBeInTheDocument();
  });

  it('should have a button to represent removing a user', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-ru');
    expect(foundButton).toBeInTheDocument();
  });
});
