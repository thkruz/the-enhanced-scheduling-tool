import React from 'react';

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
    <div>
      <h1 style={{ textAlign: 'center' }}>{getPageTitle(location)}</h1>
    </div>
  );
};

export default Header;
