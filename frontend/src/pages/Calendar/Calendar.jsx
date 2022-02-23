import React, {useEffect} from "react";
import Loading from "../../components/Loading/Loading";
import {Link} from 'react-router-dom';

import { CalendarMonthlyLayout } from "../../components/StyledComponents/CalendarMonthlyLayout";
import { CalendarDayCard } from "../../components/StyledComponents/CalendaryDayCard";
import { ShiftContainer } from "../../components/StyledComponents/ShiftContainer";
import { Shift } from "../../components/StyledComponents/Shift";

import MemberDay from "../../components/MemberDay/MemberDay";

import useFetch from "../../utils/useFetch/useFetch";

const DayPlaceholder = ({day,shift1,shift2,shift3}) => {
  console.log(day);
  console.log(shift1);
  return (
    <CalendarDayCard>
      <ShiftContainer>
        {day}
        {shift1.map( (member,idx) => <Shift key={idx}><Link to={`/user/${member.id}`}>{member.first} {member.last}</Link></Shift>)}
        <hr />
        {shift2.map( (member,idx) => <Shift key={idx}><Link to={`/user/${member.id}`}>{member.first} {member.last}</Link></Shift>)}
        <hr />
        {shift3.map( (member,idx) => <Shift key={idx}><Link to={`/user/${member.id}`}>{member.first} {member.last}</Link></Shift>)}
      </ShiftContainer>
    </CalendarDayCard>
  )
}

const Calendar = ({ day_array }) => {
  //const [view, setView] = useState('monthly');
  const view = "monthly";
  const { data, err, load } = useFetch('calendar?start=1&end=31');

  useEffect(() => {
    //console.log(data);
    //console.log(err);
  }, [data, err, load]);

  if (data.length <= 0) return <Loading />

  return (
    <article style={{width: "100%"}}>
          <button disabled style={{padding: "1rem"}}>Download</button>
          <br />
          <br />
          {
            view === "monthly" 
          ?
          <CalendarMonthlyLayout>
            {console.log(`Day Array: ${day_array}`)}
            { 
              /*data.map( (entry, idx) => <DayPlaceholder 
                key={idx} 
                day={entry.dayKey} 
                shift1={entry.shift1.members} 
                shift2={entry.shift2.members} 
                shift3={entry.shift3.members} 
                />)
                */
               day_array.map((day_element, idx) =>
                 <MemberDay key={idx} member={day_element[0]} date={day_element[1]} />
               )
            }
          </CalendarMonthlyLayout>
           :
            <p>View does not yet exist.</p>
          }
    </article>
  )
}

export default Calendar;