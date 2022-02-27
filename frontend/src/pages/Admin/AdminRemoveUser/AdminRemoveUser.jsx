import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SchedulerContext } from '../../../SchedulerContext';
import { RuxCheckboxGroup, RuxCheckbox, RuxButton } from '../../../../node_modules/@astrouxds/react/dist/components';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const AdminRemoveUser = ({ setStatus: updateScreen }) => {
  const [membersToRemove, setMembersToRemove] = useState([]);
  const scheduler = useContext(SchedulerContext);

  const navigate = useNavigate();

  console.log(scheduler.calendar);

  const handleSave = e => {
    console.log(membersToRemove);
    console.log(scheduler);
    const newArr = scheduler.roster.filter(item => !membersToRemove.includes(item.id));
    scheduler.roster = newArr;
    const shift1 = scheduler.calendar.filter(day =>
      day.shift1.members.some(person => membersToRemove.includes(person.id))
    );
    console.log(shift1);
    updateScreen('');
    navigate('/');
  };

  const handleCheckbox = id => {
    if (membersToRemove.indexOf(id) === -1) setMembersToRemove([...membersToRemove, id]);
    else {
      // This is the logic to use if someone is unclicking something clicked
      const filtered = membersToRemove.filter(item => item !== id);
      setMembersToRemove(filtered);
    }
  };

  return (
    <Form>
      <RuxCheckboxGroup name="checkboxes">
        {scheduler.roster.map(member => (
          <RuxCheckbox onInput={() => handleCheckbox(member.id)} key={member.id}>
            {member.first} {member.last}
          </RuxCheckbox>
        ))}
      </RuxCheckboxGroup>
      <RuxButton data-testid="data-testid-button" onClick={handleSave}>
        Remove User(s)
      </RuxButton>
    </Form>
  );
};

export default AdminRemoveUser;
