import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import UsersDetails from './UsersDetails';

describe('testing the UserDetals on the /users/:id route', () => {

  const setup = () => {
    render (
      <MemoryRouter initialEntries={['/users/1']} initialIndex={1} >
        <Routes>
          <Route path='/users/:id' element={<UsersDetails />} />
        </Routes>
      </MemoryRouter>
    );
  }

  it('should display the first name of the user', async () => {
    setup();
    expect(screen.getByRole('heading', {name: /loading/i})).toBeInTheDocument();
    expect( await screen.findByText('John')).toBeInTheDocument();
  });

  it('should display the last name of the user', async () => {
    setup();
    expect(screen.getByRole('heading', {name: /loading/i})).toBeInTheDocument();
    expect( await screen.findByText('Doe')).toBeInTheDocument();
  });

  it('should have a select menu', async () => {
    setup();
    expect(screen.getByRole('heading', {name: /loading/i})).toBeInTheDocument();
    expect( await screen.findByRole('menu')).toBeInTheDocument();
  });



});