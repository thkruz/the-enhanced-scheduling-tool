import React, { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';
import { CalendarMonthlyLayout } from '../../components/StyledComponents/CalendarMonthlyLayout';
import { CalendarDayCard } from '../../components/StyledComponents/CalendaryDayCard';
import { ShiftContainer } from '../../components/StyledComponents/ShiftContainer';
import { Shift } from '../../components/StyledComponents/Shift';

import useFetch from '../../utils/useFetch/useFetch';

const DayPlaceholder = ({ day, shift1, shift2, shift3 }) => {
  return (
    <CalendarDayCard>
      <ShiftContainer>
        {day}
        {shift1.map((member, idx) => (
          <Shift key={idx}>
            <Link to={`/user/${member.id}`}>
              {member.first} {member.last}
            </Link>
          </Shift>
        ))}
        <hr />
        {shift2.map((member, idx) => (
          <Shift key={idx}>
            <Link to={`/user/${member.id}`}>
              {member.first} {member.last}
            </Link>
          </Shift>
        ))}
        <hr />
        {shift3.map((member, idx) => (
          <Shift key={idx}>
            <Link to={`/user/${member.id}`}>
              {member.first} {member.last}
            </Link>
          </Shift>
        ))}
      </ShiftContainer>
    </CalendarDayCard>
  );
};

const Calendar = () => {
  const view = 'monthly';
  const { data, err, load } = useFetch('calendar?start=1&end=31');

  useEffect(() => {
    // Intentionally left blank
  }, [data, err, load]);

  if (data.length <= 0) return <Loading />;

  return (
    <article style={{ width: '100%' }}>
      <button disabled style={{ padding: '1rem' }}>
        Download
      </button>
      <br />
      <br />
      {view === 'monthly' ? (
        <CalendarMonthlyLayout>
          {data.map((entry, idx) => (
            <DayPlaceholder
              key={idx}
              day={entry.dayKey}
              shift1={entry.shift1.members}
              shift2={entry.shift2.members}
              shift3={entry.shift3.members}
            />
          ))}
        </CalendarMonthlyLayout>
      ) : (
        <p>View does not yet exist.</p>
      )}
    </article>
  );
};

export default Calendar;
