import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';

const Admin = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

    return (
        <div style={{width: "90%", padding: "1rem"}}>
            <RuxButton data-testid="data-testid-ud">Upload Data</RuxButton>
            <RuxButton data-testid="data-testid-ed">Export Data</RuxButton>
            <RuxButton data-testid="data-testid-ru">Remove User</RuxButton>
        </div>
    )
}

export default Admin;