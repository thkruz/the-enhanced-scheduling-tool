import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3001/';

const useFetch = (urlRoute, method, options) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (method === 'GET') {
      fetch(baseUrl + urlRoute)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Cannot convert response to json');
        }
      })
      .then(json => setData(json))
      .catch(e => setErr(e))
      .finally(() => setLoad(false));
    }
    else if (method === 'POST') {
      fetch(baseUrl + urlRoute)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Cannot convert response to json');
        }
      })
      .then(json => setData(json))
      .catch(e => setErr(e))
      .finally(() => setLoad(false));
    } else {
      setData([]);
      setErr(new Error(`fetch by ${method} was unsucessful`));
      setLoad(true);
    }
  }, [urlRoute]);

  return { data, err, load };
};

export default useFetch;
