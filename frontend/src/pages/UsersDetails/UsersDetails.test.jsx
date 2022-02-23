import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import UsersDetails from './UsersDetails';

import roster from '../../../../server/roster.json'

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

});