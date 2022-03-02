import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AdminRemoveUser from './AdminRemoveUser';

describe('testing the Administration Remove User component', () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <AdminRemoveUser />
      </BrowserRouter>
    );
  };

  it('should have a button to submit the changes', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-button');
    expect(foundButton).toBeInTheDocument();
  });
});
