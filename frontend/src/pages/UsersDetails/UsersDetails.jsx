import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RuxOption, RuxSelect } from '../../../node_modules/@astrouxds/react/dist/components';
import Loading from '../../components/Loading/Loading';
import { CalendarMonthlyLayout } from '../../components/StyledComponents/CalendarMonthlyLayout';
//import useFetch from '../../utils/useFetch/useFetch';
import { SchedulerContext } from '../../SchedulerContext';
import { dayKey2Date } from '../../utils/dayKey.mjs';
import { AdminContainer } from '../Admin/AdminStyles';
import { CalendarDayCard } from './../../components/StyledComponents/CalendaryDayCard';
import { ShiftContainer } from './../../components/StyledComponents/ShiftContainer';
import Chip from '@mui/material/Chip';

const formatChipLabel = shift => {
  // Uppercase first letter
  shift = shift.charAt(0).toUpperCase() + shift.slice(1);
  return `${shift} Shift`;
};

const UserDetails = () => {
  const [user, setUser] = useState({});

  const scheduler = useContext(SchedulerContext);

  const params = useParams();
  //const { data, err, load } = useFetch(`user/${params.id}`);
  // useEffect( () => {
  //   setUser(data);
  // }, [data, err, load]);

  console.log(params);

  const handlePrefChange = e => {
    const arr = scheduler.roster;
    const member = arr.filter(item => item.id === Number(params.id))[0];
    member.preference = e.target.value;
  };

  useEffect(() => {
    if (scheduler && scheduler.roster.length > 0) {
      console.log(scheduler.calendar);
      const arr = scheduler.roster;
      const member = arr.filter(item => item.id === Number(params.id))[0];
      setUser(member);
    }
  }, [params, scheduler]);

  if (scheduler.roster.length === 0) return <Loading />;

  return (
    <AdminContainer>
      <p id="userDetailsFirstName">{user.first}</p>
      <p>{user.last}</p>
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
                <p style={{ textAlign: 'center' }}>{dayKey2Date(entry.dayKey).toDateString()}</p>
                {entry.shift1?.members?.filter(u => u.id === user.id).length > 0 ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label={formatChipLabel(entry.shift1.shift)} color="primary" />
                  </p>
                ) : null}
                {entry.shift2?.members?.filter(u => u.id === user.id).length > 0 ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label={formatChipLabel(entry.shift2.shift)} color="primary" />
                  </p>
                ) : null}
                {entry.shift3?.members?.filter(u => u.id === user.id).length > 0 ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label={formatChipLabel(entry.shift3.shift)} color="primary" />
                  </p>
                ) : null}
                {entry.shift4?.members?.filter(u => u.id === user.id).length > 0 ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label={formatChipLabel(entry.shift4.shift)} color="primary" />
                  </p>
                ) : null}
                {entry.shift5?.members?.filter(u => u.id === user.id).length > 0 ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label={formatChipLabel(entry.shift5.shift)} color="primary" />
                  </p>
                ) : null}
                {user.nonavail?.includes(dayKey2Date(entry.dayKey).getTime()) ? (
                  <p style={{ textAlign: 'center' }}>
                    <Chip label="Unavailable" color="error" />
                  </p>
                ) : null}
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
