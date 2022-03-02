import React from 'react';
import { RuxGlobalStatusBar } from '@astrouxds/react';

const getPageTitle = location => {

  switch (true) {
    case /\/about/.test(location):
      return 'Developer Info';
    case /\/user*/.test(location):
      return 'Member Availability';
    case /\/admin/.test(location):
      return 'Admin Page';
    default:
      return 'Scheduling App';
  }
};

const Header = ({ location }) => {
  return (
    <RuxGlobalStatusBar
      id="page-title"
      style={{ backgroundColor: 'var(--color-global-tertiary-800)' }}
      dataTestid="heading"
      include-icon="true"
      app-domain="TEST"
      app-name={getPageTitle(location)}
      app-version="1.0.0"
      menu-icon="apps"
    ></RuxGlobalStatusBar>
  );
};

export default Header;
