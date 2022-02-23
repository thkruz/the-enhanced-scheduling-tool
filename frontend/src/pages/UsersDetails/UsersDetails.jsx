import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { RuxOption, RuxSelect } from '../../../node_modules/@astrouxds/react/dist/components';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../utils/useFetch/useFetch';
import Calendar from '../Calendar/Calendar';

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

  const array_of_member_days = (member_obj) => {
    let date = new Date(new Date().setUTCHours(0,0,0,0));
    let calendar_date = date;
    let days = [];
    // render two days from previous month
    calendar_date.setUTCDate(date.getUTCDate() -2);
    days.push(new Date(date));
    calendar_date.setUTCDate(calendar_date.getUTCDate() + 1);
    days.push(new Date(date));
    calendar_date.setUTCDate(calendar_date.getUTCDate() + 1);
    // render days of the current month + 1
    while (calendar_date.getUTCMonth() < date.getUTCMonth()) {
      console.log(calendar_date);
      days.push(new Date(calendar_date));
      calendar_date.setUTCDate(calendar_date.getUTCDate() + 1);
    }
    // render second day from next month
    days.push(new Date(date));
    calendar_date.setUTCDate(calendar_date.getUTCDate() + 1);
    
    let member_days = [];
    for (let day of days) {
      member_days.push([member_obj,day]);
    }
    return member_days
  }

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
      <div>
        <Calendar day_obj_array={array_of_member_days(user)}/>
      </div>
    </div>
  )

}

export default UserDetails;