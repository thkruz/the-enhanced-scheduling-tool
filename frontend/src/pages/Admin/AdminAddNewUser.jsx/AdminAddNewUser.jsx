import React, {useState, useEffect, useContext} from 'react';
import { RuxInput, RuxRadioGroup, RuxRadio, RuxButton } from '../../../../node_modules/@astrouxds/react/dist/components';
import { SchedulerContext } from '../../../SchedulerContext';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const AdminAddNewUser = ({setStatus: updateScreen}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [preference, setPreference] = useState('day');

    const scheduler = useContext(SchedulerContext);

    const handleSave = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(preference);
        const newId = scheduler.roster.length + 1;
        const newMember = {
            "id": newId,
            "first": firstName,
            "last": lastName,
            "preference": preference,
            "nonavail": []
        }
        scheduler.roster = [...scheduler.roster, newMember];
        console.log(scheduler);
        updateScreen('');
    }

    return (
        <Form>
            <label htmlFor='formFirstName' style={{paddingTop: "5px"}}>
                First Name
                <RuxInput type="text" placeholder="Enter First Name" id="formFirstName" value={firstName} onInput={(e) => setFirstName(e.target.value)}/>
            </label>
            <label htmlFor='formLastName' style={{paddingTop: "5px"}}>
                Last Name
                <RuxInput type="text" placeholder="Enter Last Name" id="formLastName" value={lastName} onInput={(e) => setLastName(e.target.value)}/>
            </label>
            <label htmlFor='formPreference' style={{paddingTop: "5px"}}>
                Shift Preference
                <RuxRadioGroup data-testid="data-testid-radio" id="formPreference" value={preference} onInput={(e) => setPreference(e.target.value)}>
                    <RuxRadio name="prefgroup" value="day">Day</RuxRadio>
                    <RuxRadio name="prefgroup" value="swing">Swing</RuxRadio>
                    <RuxRadio name="prefgroup" value="mid">Mid</RuxRadio>
                </RuxRadioGroup>
            </label>
            <RuxButton data-testid="data-testid-button" onClick={handleSave}>
                Save New User
            </RuxButton>
        </Form>
    )
}

export default AdminAddNewUser;