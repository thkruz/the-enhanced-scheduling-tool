import React from 'react';
import { RuxInput } from '../../../../node_modules/@astrouxds/react/dist/components';
const AdminAddNewUser = () => {

    return (
        <form>
            <RuxInput type="text" placeholder="Enter First Name"/>
            <RuxInput type="text" placeholder="Enter Last Name"/>
        </form>
    )
}

export default AdminAddNewUser;