import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AdminAddNewUser from './AdminAddNewUser';

describe('testing the Administration Add New User component', () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <AdminAddNewUser />
      </BrowserRouter>
    );
  };

  it('should have a field to enter a first name', async () => {
    setup();
    const foundInput = await screen.findByPlaceholderText('Enter First Name');
    expect(foundInput).toBeInTheDocument();
  });

  it('should have a field to enter a last name', async () => {
    setup();
    const foundInput = await screen.findByPlaceholderText('Enter Last Name');
    expect(foundInput).toBeInTheDocument();
  });

  it('should allow selecting a shift preference', async () => {
    setup();
    const foundRadio = await screen.findByTestId('data-testid-radio');
    expect(foundRadio).toBeInTheDocument();
  });

  it('should have a button to submit the add new user form', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-button');
    expect(foundButton).toBeInTheDocument();
  });
});
