import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { saveCsv } from '../../utils/saveCsv';
import Calendar from './Calendar';

jest.mock('../../utils/saveCsv', () => ({
  saveCsv: jest.fn(),
}));

describe('testing the Developers on the /about route', () => {
  const setup = () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('should save when save button is clicked', async () => {
    setup();
    const Download = await waitFor(async () => {
      return screen.getByText('Download');
    });
    await Download.click();
    expect(saveCsv).toHaveBeenCalled();
  });
});
