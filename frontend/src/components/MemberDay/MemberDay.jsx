import React, { useState } from 'react';

const MemberDay = ({ member, date }) => {
  const [day_background, set_day_background] = useState('');
  const [availability_status, set_availability_status] = useState('');

  const set_availability = (member_object, date_val) => {
    let date_index = member_object.nonavail.indexOf(date_val);
    if (date_index !== -1) {
      // found date in list, set availability to free and remove from list
      member_object.nonavail = member_object.nonavail.filter(el => el !== date_val);
      set_day_background('');
      set_availability_status('Available');
    } else {
      // did not find date in list, set availability to unavailable
      member_object.nonavail.push(date);
      set_day_background('red');
      set_availability_status('Unavailable');
    }
  };

  // Needs these objects
  // member Member object
  // date as Date object
  return (
    <div
      style={{ backgroundColor: day_background }}
      onClick={() => set_availability(member, date)}
      data-testid="member-day-container"
    >
      {/* Content goes here */}
    </div>
  );
};

export default MemberDay;
