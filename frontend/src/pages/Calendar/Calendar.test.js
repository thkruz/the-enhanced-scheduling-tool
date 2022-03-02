import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { SchedulerContext } from '../../SchedulerContext';
import { saveCsv } from '../../utils/saveCsv';
import Calendar from './Calendar';

jest.mock('../../utils/saveCsv', () => ({
  saveCsv: jest.fn(),
}));

const fakeContextData = {
  roster: [
    {
      id: 1,
      first: 'John',
      last: 'Doe',
      preference: 'day',
      nonavail: [1643068800000, 1641600000000, 1643068800000, 1642636800000],
    },
  ],
  calendar: [
    {
      dayKey: 1,
      shift1: {
        dayKey: 1,
        shift: 'day',
        members: [
          {
            id: 1,
            first: 'John',
            last: 'Doe',
            preference: 'day',
            nonavail: [1643068800000, 1641600000000, 1643068800000, 1642636800000],
          },
          {
            id: 4,
            first: 'Jill',
            last: 'Doe',
            preference: 'day',
            nonavail: [1643155200000, 1641081600000, 1642118400000, 1642982400000],
          },
        ],
      },
      shift2: {
        dayKey: 1,
        shift: 'swing',
        members: [
          {
            id: 2,
            first: 'Jane',
            last: 'Doe',
            preference: 'swing',
            nonavail: [1642291200000, 1642464000000, 1641254400000, 1642636800000],
          },
          {
            id: 5,
            first: 'Joe',
            last: 'Doe',
            preference: 'swing',
            nonavail: [1642809600000, 1642636800000, 1641686400000, 1642809600000],
          },
        ],
      },
      shift3: {
        dayKey: 1,
        shift: 'mid',
        members: [
          {
            id: 3,
            first: 'Jack',
            last: 'Doe',
            preference: 'mid',
            nonavail: [1642032000000, 1643587200000, 1641945600000, 1642982400000],
          },
          {
            id: 6,
            first: 'Jenny',
            last: 'Doe',
            preference: 'mid',
            nonavail: [1642291200000, 1643587200000, 1642464000000, 1643500800000],
          },
        ],
      },
      isConflict: true,
    },
  ],
};

describe('testing the Developers on the /about route', () => {
  const setup = () => {
    render(
      <SchedulerContext.Provider value={fakeContextData}>
        <MemoryRouter initialEntries={['/']} initialIndex={1}>
          <Routes>
            <Route path="*" element={<Calendar />} />
          </Routes>
        </MemoryRouter>
      </SchedulerContext.Provider>
    );
  };

  it('should save when save button is clicked', async () => {
    setup();
    const DownloadButton = await screen.findByTestId('downloadButton');
    expect(DownloadButton).toBeInTheDocument();

    const Download = screen.getByTestId('downloadButton');
    await Download.click();
    expect(saveCsv).toHaveBeenCalled();
  });
});
