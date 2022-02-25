import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Padding, VerticalSpacer} from './AdminStyles';
import Loading from '../../components/Loading/Loading';
import Calendar from '../Calendar/Calendar';

const Admin = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

    const handleDataUpload = () => {
        alert('This button uploads a new schedule');
    }

    const handleExportData = () => {
        alert('This button exports the current schedule');
    }

    const handleAddNewUser = () => {
        alert('This button adds a new user to the roster');
    }

    const handleRemoveUser = () => {
        alert('This button removes a user from roster');
    }

    return (
        <AdminContainer>
            <VerticalSpacer>
                <div>
                    <Padding>
                        <RuxButton data-testid="data-testid-ud" onClick={handleDataUpload}>Upload Data</RuxButton>
                    </Padding>
                    <Padding>
                        <RuxButton data-testid="data-testid-ed" onClick={handleExportData}>Export Data</RuxButton>
                    </Padding>
                    <Padding>
                        <RuxButton data-testid="data-testid-au" onClick={handleAddNewUser}>Add New User</RuxButton>
                    </Padding>
                    <Padding>
                        <RuxButton data-testid="data-testid-ru" onClick={handleRemoveUser}>Remove User</RuxButton>
                    </Padding>
                </div>
                <div>
                   { (scheduler.roster.length === 0) ? <Loading /> : <Calendar /> } 
                </div>
            </VerticalSpacer>

        </AdminContainer>
    )
}

export default Admin;