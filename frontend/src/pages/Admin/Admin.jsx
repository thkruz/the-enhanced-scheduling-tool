import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Spacing} from './AdminStyles';

const Admin = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

    const handleExportData = () => {
        alert('This button exports the current schedule');
    }

    const handleRemoveUser = () => {
        alert('This button removes a user from roster');
    }

    const handleAddNewMember = () => {
        alert('This button adds a new user to the roster');
    }

    return (
        <AdminContainer>
            <Spacing>
                <RuxButton data-testid="data-testid-ud">Upload Data</RuxButton>
            </Spacing>
            <Spacing>
                <RuxButton data-testid="data-testid-ed">Export Data</RuxButton>
            </Spacing>
            <Spacing>
                <RuxButton data-testid="data-testid-ru">Remove User</RuxButton>
            </Spacing>
        </AdminContainer>
    )
}

export default Admin;