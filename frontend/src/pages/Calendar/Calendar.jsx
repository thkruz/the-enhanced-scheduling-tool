import React, {useEffect} from "react";
import Loading from "../../components/Loading/Loading";

import useFetch from "../../utils/useFetch/useFetch";

import styled from "styled-components";

const CalendarMonthlyLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(5,1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
`

const CalendarDayCard = styled.div`
  height: auto;
  border: 1px solid black;
`

const ShiftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Shift = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const DayPlaceholder = ({day,shift1,shift2,shift3}) => {
  console.log(day);
  console.log(shift1);
  return (
    <CalendarDayCard>
      <ShiftContainer>
        {day}
        {shift1.map( (member,idx) => <Shift key={idx}>{member.first} {member.last}</Shift>)}
        <hr />
        {shift2.map( (member,idx) => <Shift key={idx}>{member.first} {member.last}</Shift>)}
        <hr />
        {shift3.map( (member,idx) => <Shift key={idx}>{member.first} {member.last}</Shift>)}
      </ShiftContainer>
    </CalendarDayCard>
  )
}

const Calendar = () => {
  //const [view, setView] = useState('monthly');
  const view = "monthly";
  //const [data, setData] = useState([]);
  //const [err, setError] = useState(null);
  // data will hold an array of objects
  //  each object has:
  //    dayKey: int
  //    shift: string
  //    members: array of objects
  //      id: number
  //      first: string
  //      last: string
  //      preference: string
  //      nonavail: array of numbers
  const { data, err, load } = useFetch('calendar?start=1&end=31');

  // useEffect(() => {
  //   fetch('http://localhost:3001/calendar?start=1&end=31')
  //   .then( response => response.json())
  //   .then(json => setData(json))
  //   .catch(e => setError(e));
  // }, []);

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
            { 
              data.map( (entry, idx) => <DayPlaceholder 
                key={idx} day={entry.dayKey} 
                shift1={entry.shift1.members} 
                shift2={entry.shift2.members} 
                shift3={entry.shift3.members} 
                />)
            }
          </CalendarMonthlyLayout>
           :
            <p>View does not yet exist.</p>
          }
    </article>
  )
}

export default Calendar;