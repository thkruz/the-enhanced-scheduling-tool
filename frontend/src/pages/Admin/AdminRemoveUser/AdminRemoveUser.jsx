import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { SchedulerContext } from "../../../SchedulerContext";
import { RuxCheckboxGroup, RuxCheckbox, RuxButton } from "../../../../node_modules/@astrouxds/react/dist/components";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const AdminRemoveUser = ({setStatus: updateScreen}) => {

    const [membersToRemove, setMembersToRemove] = useState([]);

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

    const handleSave = (e) => {
        console.log(e.target.value)
        console.log(scheduler);
        updateScreen('');
    }

    return (
        <Form>
            <RuxCheckboxGroup>
                {scheduler.roster.map(member => <RuxCheckbox name={`checkbox-${member.id}`} key={member.id}>{member.first} {member.last}</RuxCheckbox>)}
            </RuxCheckboxGroup>
            <RuxButton data-testid="data-testid-button" onClick={handleSave}>
                Remove User(s)
            </RuxButton>
        </Form>
    )
}

export default AdminRemoveUser;