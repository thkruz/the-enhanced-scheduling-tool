import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Spacing} from './AdminStyles';

const Admin = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);


    const handleDataUpload = () => {
        alert('This button uploads a new schedule');
    }

    const handleExportData = () => {
        alert('This button exports the current schedule');
    }

    const handleRemoveUser = () => {
        alert('This button removes a user from roster');
    }

    return (
        <AdminContainer>
            <Spacing>
                <RuxButton data-testid="data-testid-ud" onClick={handleDataUpload}>Upload Data</RuxButton>
            </Spacing>
            <Spacing>
                <RuxButton data-testid="data-testid-ed" onClick={handleExportData}>Export Data</RuxButton>
            </Spacing>
            <Spacing>
                <RuxButton data-testid="data-testid-ru" onClick={handleRemoveUser}>Remove User</RuxButton>
            </Spacing>
        </AdminContainer>
    )
}

export default Admin;