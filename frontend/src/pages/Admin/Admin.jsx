import React, {useState, useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Padding, VerticalSpacer} from './AdminStyles';
import Loading from '../../components/Loading/Loading';
import Calendar from '../Calendar/Calendar';
import AdminAddNewUser from './AdminAddNewUser.jsx/AdminAddNewUser';

const Admin = () => {
    const [status, setStatus] = useState('');

    const scheduler = useContext(SchedulerContext);

    const handleDataUpload = () => {
        alert('This button uploads a new schedule');
        setStatus('upload');
    }

    const handleExportData = () => {
        alert('This button exports the current schedule');
        setStatus('export');
    }

    const handleAddNewUser = () => {
        setStatus('add');
    }

    const handleRemoveUser = () => {
        alert('This button removes a user from roster');
        setStatus('remove');
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
                {
                    status === 'add' && <AdminAddNewUser />
                }
                <div>
                   { (scheduler.roster.length === 0) ? <Loading /> : (status === '') ? <Calendar /> : '' } 
                </div>
            </VerticalSpacer>

        </AdminContainer>
    )
}

export default Admin;