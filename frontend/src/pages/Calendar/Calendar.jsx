import React, {useState, useEffect} from "react";
import Loading from "../../components/Loading/Loading";
//import useFetch from "../../utils/useFetch/useFetch";

const DayPlaceholder = ({day}) => {
  return (
    <div>
      <h3>Day {day}</h3>
    </div>
  )
}

const Calendar = () => {
  const [data, setData] = useState([]);
  const [err, setError] = useState(null);
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
  //const { data, err, load } = useFetch('calendar?start=1&end=1');

  useEffect(() => {
    fetch('http://localhost:3001/calendar?start=1&end=31')
    .then( response => response.json())
    .then(json => setData(json))
    .catch(e => setError(e));
  }, []);

  useEffect(() => {
    //console.log(data);
    //console.log(err);
  }, [data, err]);

  if (data.length <= 0) return <Loading />

  return (
    <>
          <section style={{display: "flex"}}>
          { data.map( (entry, idx) => <DayPlaceholder key={idx} day={entry.dayKey} />)}
          {/* {
            data.map( (day, idx) => (
              <div key={idx} style={{margin: "0px 3px", padding: "4px", border: "thin solid black", width: "6vw"}}>
                <p>{day.dayKey}</p>
                Shift: {day.shift}
              </div>
            )).slice(0,6)
          } */}
          </section> 
    </>
  )
}

export default Calendar;