import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Calendar from './pages/About/Calendar';
import About from './pages/About/About';
import useFetch from './utils/useFetch/useFetch';
import styled from 'styled-components';
import { RuxClassificationMarking } from '@astrouxds/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-global-tertiary-900);
  height: 100vh;
`;

const Navigation = styled.nav`
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  wrap: no-wrap;
  width: 100%;
  padding: 20px;
  height: 100%;
`;
const Left = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--color-global-tertiary-700);
  padding: 0.7rem;
  width: 200px;
`;

const Center = styled.section`
  display: flex;
  justify-content: center;
  width: calc(100% - 200px - 80px);
  background: var(--color-global-tertiary-700);
  margin: 0 1rem;
`;

const Right = styled.section`
  display: flex;
  width: 80px;
  justify-content: center;
  background: var(--color-global-tertiary-700);
`;

function App() {
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
}

export default App;
