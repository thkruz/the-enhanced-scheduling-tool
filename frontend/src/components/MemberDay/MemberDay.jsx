import React from 'react';

var day_background='';

const set_availability = (member_object, date) => {
  if (member_object.nonavail.find(date)) {
    day_background='';
    return
  }
  else{
    member_object.nonavail.push(date);
    day_background='red'
    return
  }
}

const MemberDay = ({ member, date }) => {
  return (
    <div style={{ backgroundColor: 'red' }} onClick={() => set_availability(member, date)}>
      <ul>
        <li>Day</li>
        <li>Swing</li>
        <li>Mid</li>
      </ul>
    </div>
  );
};

export default MemberDay