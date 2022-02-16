import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function FakeComponent({url}) {
  const [mockState, setMockState] = useState([0,0,0]);
  const {data, err, load} = useFetch(url);

  useEffect( () => {
    setMockState(data,err,load);
  },[])

  function handleClick () {
    console.log(data, err, load);
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <p>Data: {mockState}</p>
    </div>
  )
}