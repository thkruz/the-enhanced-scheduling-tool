import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3001/';

/**
 * urlRoute: a string -> examples: '', 'roster', 'calendar'
 * method: a string -> examples: 'GET', 'POST', 'PUT', 'DELETE
 * options: an object -> example {'start': 1, 'end': 7}
 */
const useFetch = (urlRoute, method, options) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (method.toLowerCase() === 'get') {
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
    if (method.toLowerCase() === 'post') {
      fetch(baseUrl + urlRoute, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
      })
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
