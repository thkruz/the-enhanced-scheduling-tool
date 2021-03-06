import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
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

    const navigate = useNavigate();

    const handleSave = () => {
        scheduler.counter++;
        const newId = scheduler.counter;
        scheduler.counter++;
        const newMember = {
            "id": newId,
            "first": firstName,
            "last": lastName,
            "preference": preference,
            "nonavail": []
        }
        if (firstName.length === 0 || lastName.length === 0) {
            alert('First and Last Name Required!')
            return;
        }
        scheduler.roster = [...scheduler.roster, newMember];
        console.log(scheduler);
        updateScreen('');
        navigate('/');
    }

    return (
        <Form>
            <label htmlFor='formFirstName' style={{paddingTop: "5px"}}>
                First Name
                <RuxInput required type="text" placeholder="Enter First Name" id="formFirstName" value={firstName} onInput={(e) => setFirstName(e.target.value)}/>
            </label>
            <label htmlFor='formLastName' style={{paddingTop: "5px"}}>
                Last Name
                <RuxInput required type="text" placeholder="Enter Last Name" id="formLastName" value={lastName} onInput={(e) => setLastName(e.target.value)}/>
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