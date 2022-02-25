import React from 'react';
import { RuxInput, RuxRadioGroup, RuxRadio } from '../../../../node_modules/@astrouxds/react/dist/components';
const AdminAddNewUser = () => {

    return (
        <form>
            <RuxInput type="text" placeholder="Enter First Name"/>
            <RuxInput type="text" placeholder="Enter Last Name"/>
            <RuxRadioGroup data-testid="data-testid-radio">
                <RuxRadio>Day</RuxRadio>
                <RuxRadio>Swing</RuxRadio>
                <RuxRadio>Mid</RuxRadio>
            </RuxRadioGroup>
        </form>
    )
}

export default AdminAddNewUser;