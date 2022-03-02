import React, { useEffect, useContext, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { Link, useLocation } from 'react-router-dom';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import { CalendarMonthlyLayout } from '../../components/StyledComponents/CalendarMonthlyLayout';
import { CalendarDayCard } from '../../components/StyledComponents/CalendaryDayCard';
import { ShiftContainer } from '../../components/StyledComponents/ShiftContainer';
import { Shift } from '../../components/StyledComponents/Shift';
import { saveCsv } from '../../utils/saveCsv';
import { SchedulerContext } from '../../SchedulerContext';

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
  const [data, setData] = useState([]);

  const view = 'monthly';
  const scheduler = useContext(SchedulerContext);
  const location = useLocation().pathname;

  useEffect(() => {
    setData(scheduler.calendar);
  });

  if (scheduler?.calendar.length <= 0) return <Loading />;

  return (
    <article style={{ width: '100%' }}>
      {location === '/' && (
        <RuxButton
          id="downloadButton"
          dataTestid="downloadButton"
          style={{ padding: '1rem' }}
          onClick={() => saveCsv(data, `Schedule_${new Date().getUTCFullYear()}_${new Date().getUTCMonth() + 1}`)}
        >
          Download
        </RuxButton>
      )}
      <br />
      <br />
      {view === 'monthly' ? (
        <CalendarMonthlyLayout id="monthly-calendar">
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
