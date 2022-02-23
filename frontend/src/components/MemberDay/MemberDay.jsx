import React, { useState } from 'react';



const MemberDay = ({ member, date }) => {

  const [day_background, set_day_background] = useState('');
  const [availability_status, set_availability_status] = useState('');

  const set_availability = (member_object, date) => {
    let date_index = member_object.nonavail.indexOf(date);
    if (date_index != -1) {
      // found date in list, set availability to free and remove from list
      member_object.nonavail = member_object.nonavail.filter((el) => (el != date));
      set_day_background('');
      set_availability_status('Available');
      return
    }
    else{
      // did not find date in list, set availability to unavailable
      member_object.nonavail.push(date);
      set_day_background('red');
      set_availability_status('Unavailable');
      return
    }
  }

  return (
    <div style={{ backgroundColor: day_background }} onClick={() => set_availability(member, date)} data-testid="member-day-container">
      <ul>
        <h3>
          {`Status: ${availability_status}`}
        </h3>
        <li>Day</li>
        <li>Swing</li>
        <li>Mid</li>
      </ul>
    </div>
  );
};

export default MemberDay