import React from 'react';

var day_background='';

const set_availability = (member_object, date) => {
  let date_index = member_object.nonavail.indexOf(date);
  if (date_index != -1) {
    // found date in list, set availability to free and remove from list
    member_object.nonavail = member_object.nonavail.filter((el) => (el != date));
    day_background='';
    return
  }
  else{
    // did not find date in list, set availability to unavailable
    member_object.nonavail.push(date);
    day_background='red';
    return
  }
}

const MemberDay = ({ member, date }) => {
  return (
    <div style={{ backgroundColor: day_background }} onClick={() => set_availability(member, date)} data-testid="member-day-container">
      <ul>
        <li>Day</li>
        <li>Swing</li>
        <li>Mid</li>
      </ul>
    </div>
  );
};

export default MemberDay