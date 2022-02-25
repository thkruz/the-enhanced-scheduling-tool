import React, {useContext} from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import {AdminContainer, Spacing} from './AdminStyles';

const Admin = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

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