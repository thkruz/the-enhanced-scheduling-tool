//@ts-check

import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Calendar from './pages/Calendar/Calendar';
import UserDetails from './pages/UsersDetails/UsersDetails';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import useFetch from './utils/useFetch/useFetch';
import { SchedulerContext } from './SchedulerContext';
import { RuxClassificationMarking } from '@astrouxds/react';
import { Container } from './components/StyledComponents/Container';
import { Navigation } from './components/StyledComponents/Navigation';
import { Main } from './components/StyledComponents/Main';
import { Left } from './components/StyledComponents/Left';
import { Center } from './components/StyledComponents/Center';
import { Right } from './components/StyledComponents/Right';

const App = () => {
  const { data: rosterData, err: rosterErr, load: rosterLoad } = useFetch('roster');
  // TODO: Replace with a real fetch request
  const { data: calendarData, err: calendarErr, load: calendarLoad } = useFetch('calendar?start=1&end=31');
  const scheduler = useContext(SchedulerContext);

  useEffect(() => {
    scheduler.roster = rosterData;
  }, [rosterData]);

  useEffect(() => {
    scheduler.calendar = calendarData;
  }, [calendarData]);

  const handleAddNewMember = () => {
    alert('This button adds a new user to the roster');
  } 

  return (
      <Container>
        <Navigation>
          <RuxClassificationMarking classification="unclassified" />
          <Header location={useLocation().pathname} />
        </Navigation>
        <Main>
          <Left>
            <span>Quick Navigation</span>
            <ul>
              <li>
                <NavLink to="/">Schedule</NavLink>
              </li>
              <li>
                <NavLink to="/about">Developers</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Administration</NavLink>
              </li>
            </ul>
            <span>Roster</span>
            <ul>
              {scheduler.roster.length > 0 &&
                scheduler.roster.map(member => (
                  <li key={`${member.first}+${member.last}+${member.id}`}>
                    <Link to={`/user/${member.id}`}>
                      {member.first} {member.last}
                    </Link>
                  </li>
                ))}
              {/* {useLocation().pathname === '/admin' && <RuxButton onClick={handleAddNewMember}><span style={{fontSize: "0.9rem"}}>{'+ Add New Member'}</span></RuxButton>} */}
            </ul>
          </Left>
          <Center>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/user/:id" element={<UserDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Center>
          <Right>PIX</Right>
        </Main>
      </Container>
  );
};

export default App;
