import { render, screen, fireEvent } from '@testing-library/react';
import MemberDay from './MemberDay';
import '@testing-library/jest-dom/extend-expect';

const memberObj = {
  id: 1,
  first: 'John',
  last: 'Doe',
  preference: 'day',
  nonavail: [1643068800000, 1641600000000, 1643068800000, 1642636800000],
};
const testEntry = {
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
};

describe('MemberDay', () => {
  const setup = () => {
    render(<MemberDay member={memberObj} dayKey={1} entry={testEntry} />);
  };
  it('should show the day of the month', () => {
    setup();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should the correct shifts', () => {
    setup();
    expect(screen.getByText('Day Shift')).toBeInTheDocument();
    expect(screen.queryByText('Swing Shift')).toBe(null);
    expect(screen.queryByText('Mid Shift')).toBe(null);
  });

  it('should update unavailability when clicked', () => {
    setup();
    const memberDayContainer = screen.getByTestId('member-day-container');
    expect(screen.queryByText('Unavailable')).toBe(null);
    fireEvent.click(memberDayContainer);
    expect(screen.getByText('Unavailable')).toBeInTheDocument();
    fireEvent.click(memberDayContainer);
    expect(screen.queryByText('Unavailable')).toBe(null);
  });
});
