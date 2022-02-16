import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3001/';

const useFetch = urlRoute => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(baseUrl + urlRoute)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Cannot convert response to json');
        }
      })
      .then(json => {
        console.warn(json);
        return setData(json);
      })
      .catch(e => setErr(e))
      .finally(() => setLoad(false));
  }, [urlRoute]);

  return { data, err, load };
};

export default useFetch;
