import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { RuxOption, RuxSelect } from '../../../node_modules/@astrouxds/react/dist/components';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../utils/useFetch/useFetch';

const UserDetails = () => {

  const [user, setUser] = useState({});

  const params = useParams();
  const { data, err, load } = useFetch(`user/${params.id}`);

  useEffect( () => {
    setUser(data);
  }, [data, err, load]);

  const handlePrefChange = e => {
    setUser({ ...user, preference: e.target.value });
  };

  if (load) return <Loading />

  return (
    <div>
      <p>{user.first}</p>
      <p>{user.last}</p>
      <RuxSelect
        label="Shift Preference"
        input-id="preference"
        label-id="preference"
        value={user.preference}
        style={{ maxWidth: '30%' }}
        onRuxchange={handlePrefChange}
        data-testid='select'
      >
        <RuxOption value="day" label="Day" data-testid='select-option'/>
        <RuxOption value="swing" label="Swing" data-testid='select-option'/>
        <RuxOption value="mid" label="Mid" data-testid='select-option'/>
      </RuxSelect>
    </div>
  )

}

export default UserDetails;