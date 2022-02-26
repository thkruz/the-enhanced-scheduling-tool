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
        console.log(scheduler);
        updateScreen('');
    }

    const handleCheckbox = (id) => {
        console.log(id);
    }

    return (
        <Form>
            <RuxCheckboxGroup name="checkboxes">
                {scheduler.roster.map(member => <RuxCheckbox onInput={() => handleCheckbox(member.id)} key={member.id}>{member.first} {member.last}</RuxCheckbox>)}
            </RuxCheckboxGroup>
            <RuxButton data-testid="data-testid-button" onClick={handleSave}>
                Remove User(s)
            </RuxButton>
        </Form>
    )
}

export default AdminRemoveUser;