import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Padding, VerticalSpacer} from './AdminStyles';
import Loading from '../../components/Loading/Loading';

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
            <VerticalSpacer>
                <div>
                    <Padding>
                        <RuxButton data-testid="data-testid-ud" onClick={handleDataUpload}>Upload Data</RuxButton>
                    </Padding>
                    <Padding>
                        <RuxButton data-testid="data-testid-ed" onClick={handleExportData}>Export Data</RuxButton>
                    </Padding>
                    <Padding>
                        <RuxButton data-testid="data-testid-ru" onClick={handleRemoveUser}>Remove User</RuxButton>
                    </Padding>
                </div>
                <div>
                   { (scheduler.roster.length === 0) ? <Loading /> : <p>Calendar Here</p> } 
                </div>
            </VerticalSpacer>

        </AdminContainer>
    )
}

export default Admin;