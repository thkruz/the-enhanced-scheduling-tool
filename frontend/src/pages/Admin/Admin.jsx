import React, {useState, useEffect, useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Padding, VerticalSpacer} from './AdminStyles';
import Loading from '../../components/Loading/Loading';
import Calendar from '../Calendar/Calendar';
import AdminAddNewUser from './AdminAddNewUser/AdminAddNewUser';

const Admin = () => {
    const [status, setStatus] = useState('');

    const scheduler = useContext(SchedulerContext);

    const handleDataUpload = () => {
        alert('This button uploads a new schedule');
        //setStatus('upload');
    }

    const handleExportData = () => {
        alert('This button exports the current schedule');
       // setStatus('export');
    }

    const handleAddNewUser = () => {
        setStatus('add');
    }

    const handleRemoveUser = () => {
        alert('This button removes a user from roster');
        //setStatus('remove');
    }

    return (
        <AdminContainer>
            <VerticalSpacer>
                {
                    status === '' && 
                    <div>
                        <Padding>
                            <RuxButton data-testid="data-testid-ud" onClick={handleDataUpload}>Upload Data</RuxButton><span>TBD, only alerts</span>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-ed" onClick={handleExportData}>Export Data</RuxButton><span>TBD, only alerts</span>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-au" onClick={handleAddNewUser}>Add New User</RuxButton><span>Completed</span>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-ru" onClick={handleRemoveUser}>Remove User</RuxButton><span>TBD, only alerts</span>
                        </Padding>
                    </div>
                }

                {
                    status === 'add' && <AdminAddNewUser setStatus={setStatus}/>
                }
                <div>
                   { (scheduler.roster.length === 0) ? <Loading /> : (status === '') ? <Calendar /> : '' } 
                </div>
            </VerticalSpacer>

        </AdminContainer>
    )
}

export default Admin;