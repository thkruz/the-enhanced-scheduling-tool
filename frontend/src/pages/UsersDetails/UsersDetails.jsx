import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';

import useFetch from '../../utils/useFetch/useFetch';

const UserDetails = () => {

  const params = useParams();
  const { data, err, load } = useFetch(`user/${params.id}`);

  useEffect( () => {
  }, [data, err, load]);

  if (load) return <Loading />

  return (
    <div>
      <p>{data.first}</p>
      <p>{data.last}</p>
      <select defaultValue={data.preference}>
        <option>Day</option>
        <option>Swing</option>
        <option>Mid</option>
      </select>
    </div>
  )

}

export default UserDetails;