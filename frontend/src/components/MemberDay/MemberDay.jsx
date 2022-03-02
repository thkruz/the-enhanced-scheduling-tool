import React, { useEffect, useState } from 'react';
import { dayKey2Date } from '../../utils/dayKey.mjs';
import Chip from '@mui/material/Chip';

const formatChipLabel = shift => {
  // Uppercase first letter
  shift = shift.charAt(0).toUpperCase() + shift.slice(1);
  return `${shift} Shift`;
};

const MemberDay = ({ member, dayKey, entry }) => {
  const [availability_status, set_availability_status] = useState('');

  const set_availability = (member_object, dayKey) => {
    // dayKey is in ms since jan 1 2022
    const date_index = member_object.nonavail.indexOf(dayKey);
    if (date_index !== -1) {
      // found date in list, set availability to free and remove from list
      member_object.nonavail = member_object.nonavail.filter(el => el !== dayKey);
      set_availability_status('Available');
    } else {
      // did not find date in list, set availability to unavailable
      member_object.nonavail.push(dayKey);
      set_availability_status('Unavailable');
    }
  };

  // Needs these objects
  // member Member object
  // date as Date object
  return (
    <div onClick={() => set_availability(member, dayKey2Date(dayKey).getTime())} data-testid="member-day-container">
      <p style={{ textAlign: 'center' }}>{dayKey2Date(dayKey).getDate()}</p>
      {entry?.shift1?.members?.filter(u => u.id === member.id).length > 0 ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label={formatChipLabel(entry.shift1.shift)} color="primary" />
        </p>
      ) : null}
      {entry?.shift2?.members?.filter(u => u.id === member.id).length > 0 ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label={formatChipLabel(entry.shift2.shift)} color="primary" />
        </p>
      ) : null}
      {entry?.shift3?.members?.filter(u => u.id === member.id).length > 0 ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label={formatChipLabel(entry.shift3.shift)} color="primary" />
        </p>
      ) : null}
      {entry?.shift4?.members?.filter(u => u.id === member.id).length > 0 ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label={formatChipLabel(entry.shift4.shift)} color="primary" />
        </p>
      ) : null}
      {entry?.shift5?.members?.filter(u => u.id === member.id).length > 0 ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label={formatChipLabel(entry.shift5.shift)} color="primary" />
        </p>
      ) : null}
      {member?.nonavail?.includes(dayKey2Date(entry?.dayKey).getTime()) ? (
        <p style={{ textAlign: 'center' }}>
          <Chip label="Unavailable" color="error" />
        </p>
      ) : null}
    </div>
  );
};

export default MemberDay;
