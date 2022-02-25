import React from 'react';
import { RuxInput, RuxRadioGroup, RuxRadio, RuxButton } from '../../../../node_modules/@astrouxds/react/dist/components';

import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const AdminAddNewUser = () => {

    return (
        <Form>
            <RuxInput type="text" placeholder="Enter First Name"/>
            <RuxInput type="text" placeholder="Enter Last Name"/>
            <RuxRadioGroup data-testid="data-testid-radio">
                <RuxRadio>Day</RuxRadio>
                <RuxRadio>Swing</RuxRadio>
                <RuxRadio>Mid</RuxRadio>
            </RuxRadioGroup>
            <RuxButton>
                Save New User
            </RuxButton>
        </Form>
    )
}

export default AdminAddNewUser;