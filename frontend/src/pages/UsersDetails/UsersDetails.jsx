import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';

import useFetch from '../../utils/useFetch/useFetch';

const UserDetails = () => {

  const [member, setMember] = useState({});
  const params = useParams();
  const {data, err, load} = useFetch('roster');

  useEffect( () => {
    setMember(data.filter( entry => entry.id === Number(params.id))[0])
  }, [data, err, load]);

  if (load) return <Loading />

  return (
    <div>
      <p>{member.first}</p>
      <p>{member.last}</p>>
    </div>
  )

}

export default UserDetails;