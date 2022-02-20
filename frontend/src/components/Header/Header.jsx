import React from 'react';
import { RuxGlobalStatusBar } from '@astrouxds/react';

const getPageTitle = location => {
  switch (location) {
    case '/about':
      return 'Developer Info';
    case '/user':
      return 'Member Availability';
    case '/admin':
      return 'Admin Page';
    default:
      return 'Scheduling App';
  }
};

const Header = ({ location }) => {
  return (
    <RuxGlobalStatusBar
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
