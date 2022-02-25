import { MemoryRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminAddNewUser from './AdminAddNewUser';

describe('testing the Administration Add New User component', () => {

  const setup = () => {
    render(
        <AdminAddNewUser />
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
    const foundInput = await screen.findByTestId('data-testid-radio');
    expect(foundInput).toBeInTheDocument();
  });

});