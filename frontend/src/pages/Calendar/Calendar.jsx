import React, {useEffect} from "react";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../utils/useFetch/useFetch";

const Calendar = () => {

  // data will hold an array of objects
  //  each object has:
  //    id: number
  //    first: string
  //    last: string
  //    preference: string
  //    nonavail: array of numbers
  const { data, err, load } = useFetch('roster','POST',{'start': 1, 'end': 31});

  useEffect(() => {
    console.log(data, err, load);
  }, [data, err, load]);

  return (
    <>
      {
        data 
        ? 
          <div style={{display: "flex"}}>
          {
            data.map( (entry, idx) => (
              <div key={idx} style={{margin: "0px 3px", padding: "4px", border: "thin solid black", width: "6vw"}}>
                <p>{entry.first} {entry.last}</p>
                Preference: {entry.preference}
                <br />
                <br />
                Not Avail:
                {entry.nonavail.map( (date, idx2) => <li key={idx2}>{date}</li>)}
              </div>
            ))
          }
          </div> 
        : 
          <Loading />}
    </>
  )
}

export default Calendar;