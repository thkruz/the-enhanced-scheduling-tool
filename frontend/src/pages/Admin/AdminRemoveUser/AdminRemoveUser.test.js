import { MemoryRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminRemoveUser from './AdminRemoveUser';

describe('testing the Administration Remove User component', () => {

  const setup = () => {
    render(
        <BrowserRouter>
            <AdminRemoveUser />
        </BrowserRouter>
    );
  };

  it('should render roster names', async () => {
    setup();
    const foundInput = await screen.findByText('John Doe');
    expect(foundInput).toBeInTheDocument();
  });

  it('should have a button to submit the changes', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-button');
    expect(foundButton).toBeInTheDocument();
  });

});