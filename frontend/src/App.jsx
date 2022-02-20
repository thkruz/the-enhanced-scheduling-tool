import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Calendar from './pages/About/Calendar';
import About from './pages/About/About';
import useFetch from './utils/useFetch/useFetch';
import { RuxClassificationMarking } from '@astrouxds/react';
import { Container } from './components/Container';
import { Navigation } from './Navigation';
import { Main } from './Main';
import { Left } from './Left';
import { Center } from './Center';
import { Right } from './components/Right';

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
                <li>
                  <Link to={`/user/${member.id}`}>{member.name}</Link>
                </li>
              ))}
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
