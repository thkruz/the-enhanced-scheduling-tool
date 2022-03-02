import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RuxOption, RuxSelect } from '../../../node_modules/@astrouxds/react/dist/components';
import Loading from '../../components/Loading/Loading';
import { CalendarMonthlyLayout } from '../../components/StyledComponents/CalendarMonthlyLayout';
import { SchedulerContext } from '../../SchedulerContext';
import { AdminContainer } from '../Admin/AdminStyles';
import { CalendarDayCard } from './../../components/StyledComponents/CalendaryDayCard';
import { ShiftContainer } from './../../components/StyledComponents/ShiftContainer';
import MemberDay from '../../components/MemberDay/MemberDay';

const UserDetails = () => {
  const [user, setUser] = useState({});

  const scheduler = useContext(SchedulerContext);
  const params = useParams();

  const handlePrefChange = e => {
    const arr = scheduler.roster;
    const member = arr.filter(item => item.id === Number(params.id))[0];
    member.preference = e.target.value;
  };

  useEffect(() => {
    if (scheduler && scheduler.roster.length > 0) {
      const arr = scheduler.roster;
      const member = arr.filter(item => item.id === Number(params.id))[0];
      setUser(member);
    }
  }, [params, scheduler]);

  if (scheduler.roster.length === 0) return <Loading />;

  return (
    <AdminContainer>
      <p id="userDetailsFirstName">{user.first}</p>
      <p id="userDetailsLastName">{user.last}</p>
      <RuxSelect
        label="Shift Preference"
        input-id="preference"
        label-id="preference"
        value={user.preference}
        style={{ maxWidth: '30%' }}
        onRuxchange={handlePrefChange}
        data-testid="select"
      >
        <RuxOption value="day" label="Day" data-testid="select-option" />
        <RuxOption value="swing" label="Swing" data-testid="select-option" />
        <RuxOption value="mid" label="Mid" data-testid="select-option" />
      </RuxSelect>
      <CalendarMonthlyLayout style={{ width: '100%', margin: '20px 0 0 0' }}>
        {scheduler?.calendar?.length > 0 ? (
          scheduler.calendar.map((entry, idx) => (
            <CalendarDayCard key={idx}>
              <ShiftContainer>
                <MemberDay member={user} entry={entry} dayKey={entry.dayKey} />
              </ShiftContainer>
            </CalendarDayCard>
          ))
        ) : (
          <p>No calendar data</p>
        )}
      </CalendarMonthlyLayout>
    </AdminContainer>
  );
};

export default UserDetails;
