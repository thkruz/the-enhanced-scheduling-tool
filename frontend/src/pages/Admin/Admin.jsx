import React, { useState, useContext } from 'react';
import { SchedulerContext } from '../../SchedulerContext';
import { RuxButton } from '../../../node_modules/@astrouxds/react/dist/components';
import { AdminContainer, Padding, VerticalSpacer } from './AdminStyles';
import Loading from '../../components/Loading/Loading';
import Calendar from '../Calendar/Calendar';
import AdminAddNewUser from './AdminAddNewUser/AdminAddNewUser';
import AdminRemoveUser from './AdminRemoveUser/AdminRemoveUser';

const Admin = () => {
  const [status, setStatus] = useState('');

  const scheduler = useContext(SchedulerContext);


  const handleDataUpload = () => {
    alert('This button uploads a new schedule');
    //setStatus('upload');
  };

  const handleExportData = () => {
    const jsonFile = new Blob([JSON.stringify(scheduler.roster)], { type: 'application/json' });
    const elem = document.createElement('a');
    elem.setAttribute('href', URL.createObjectURL(jsonFile));
    elem.download = 'roster.json';
    elem.click();
    setStatus('');
  };

  const handleAddNewUser = () => {
    setStatus('add');
  };

  const handleRemoveUser = () => {
    setStatus('remove');
  };

    return (
        <AdminContainer>
            <VerticalSpacer>
                {
                    status === '' && 
                    <div>
                        <Padding>
                            <RuxButton data-testid="data-testid-ud" onClick={handleDataUpload}>Upload Roster Data</RuxButton><span>TBD, only alerts</span>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-ed" onClick={handleExportData}>Export Roster Data</RuxButton>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-au" onClick={handleAddNewUser}>Add New User</RuxButton>
                        </Padding>
                        <Padding>
                            <RuxButton data-testid="data-testid-ru" onClick={handleRemoveUser}>Remove User</RuxButton>
                        </Padding>
                    </div>
                }

        {status === 'add' && <AdminAddNewUser setStatus={setStatus} />}
        {status === 'remove' && <AdminRemoveUser setStatus={setStatus} />}
        <div>{scheduler.roster?.length === 0 ? <Loading /> : status === '' ? <Calendar /> : ''}</div>
      </VerticalSpacer>
    </AdminContainer>
  );
};

export default Admin;
