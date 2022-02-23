import React, {useState, useEffect} from "react";
import Loading from "../../components/Loading/Loading";

import useFetch from "../../utils/useFetch/useFetch";

import styled from "styled-components";

const CalendarMonthlyLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(5,1fr);
  padding: 5px;
  border: 1px solid red;
`

const CalendarDayCard = styled.div`
  min-width: 100px;
  height: auto;
  border: 1px solid black;
`

const DayPlaceholder = ({day}) => {
  return (
    <CalendarDayCard>
      <h3>Day {day}</h3>
    </CalendarDayCard>
  )
}

const Calendar = () => {
  const [view, setView] = useState('monthly');
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
           { data.map( (entry, idx) => <DayPlaceholder key={idx} day={entry.dayKey} />)}
          </CalendarMonthlyLayout>
           :
            <p>View does not yet exist.</p>
          }
    </article>
  )
}

export default Calendar;