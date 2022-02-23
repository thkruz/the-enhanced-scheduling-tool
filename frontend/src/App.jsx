//@ts-check

import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Calendar from './pages/Calendar/Calendar';
import About from './pages/About/About';
import useFetch from './utils/useFetch/useFetch';
import { RuxClassificationMarking } from '@astrouxds/react';
import { Container } from './components/StyledComponents/Container';
import { Navigation } from './components/StyledComponents/Navigation';
import { Main } from './components/StyledComponents/Main';
import { Left } from './components/StyledComponents/Left';
import { Center } from './components/StyledComponents/Center';
import { Right } from './components/StyledComponents/Right';

const App = () => {
  const { data, err, load } = useFetch('roster');

  useEffect(() => {
    console.log(data);
    console.log(err);
    console.log(load);
  }, [data, err, load]);

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
            {data &&
              data.map(member => (
                <li key={member.id}>
                  <Link to={`/user/${member.id}`}>{member.first} {member.last}</Link>
                </li>
              ))}
            {useLocation().pathname === '/admin' && <li>+ Add New Member</li> }
          </ul>
        </Left>
        <Center>
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Loading />} />
          </Routes>
        </Center>
        <Right>PIX</Right>
      </Main>
    </Container>
  );
};

export default App;
