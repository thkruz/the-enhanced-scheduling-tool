import React, { useEffect } from 'react';
import { dayKey2Date } from '../../utils/dayKey.mjs';
import { CalendarDayCard } from './../../components/StyledComponents/CalendaryDayCard';
import { ShiftContainer } from './../../components/StyledComponents/ShiftContainer';
import Chip from '@mui/material/Chip';

const formatChipLabel = shift => {
  // Uppercase first letter
  shift = shift.charAt(0).toUpperCase() + shift.slice(1);
  return `${shift} Shift`;
};

const MemberDay = ({ member, dayKey, entry }) => {
  const [isChange, setIsChange] = React.useState(false);
  useEffect(() => {
    // Rerender
  }, [isChange]);

  const setAvailability = (memberObject, dayKey) => {
    const dateIndex = memberObject.nonavail.indexOf(dayKey);
    setIsChange(!isChange);
    if (dateIndex !== -1) {
      // found date in list, set availability to free and remove from list
      memberObject.nonavail = memberObject.nonavail.filter(el => el !== dayKey);
    } else {
      // did not find date in list, set availability to unavailable
      memberObject.nonavail.push(dayKey);
    }
  };

  return (
    <CalendarDayCard
      onClick={() => setAvailability(member, dayKey2Date(dayKey).getTime())}
      data-testid="member-day-container"
    >
      <ShiftContainer>
        <p style={{ textAlign: 'center' }}>{dayKey2Date(dayKey).getDate()}</p>
        {entry?.shift1?.members?.filter(u => u.id === member.id).length > 0 ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label={formatChipLabel(entry.shift1.shift)} color="primary" />
          </div>
        ) : null}
        {entry?.shift2?.members?.filter(u => u.id === member.id).length > 0 ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label={formatChipLabel(entry.shift2.shift)} color="primary" />
          </div>
        ) : null}
        {entry?.shift3?.members?.filter(u => u.id === member.id).length > 0 ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label={formatChipLabel(entry.shift3.shift)} color="primary" />
          </div>
        ) : null}
        {entry?.shift4?.members?.filter(u => u.id === member.id).length > 0 ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label={formatChipLabel(entry.shift4.shift)} color="primary" />
          </div>
        ) : null}
        {entry?.shift5?.members?.filter(u => u.id === member.id).length > 0 ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label={formatChipLabel(entry.shift5.shift)} color="primary" />
          </div>
        ) : null}
        {member?.nonavail?.includes(dayKey2Date(entry?.dayKey).getTime()) ? (
          <div style={{ textAlign: 'center' }}>
            <Chip label="Unavailable" color="error" />
          </div>
        ) : null}
      </ShiftContainer>
    </CalendarDayCard>
  );
};

export default MemberDay;
