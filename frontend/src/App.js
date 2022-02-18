import styled from 'styled-components';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Loading from './components/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.3rem;
  border: 1px solid black;
`
const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  wrap: no-wrap;
  width: 100%;
`
const Left = styled.section`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  border: 1px solid black;
`

const Center = styled.section`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: calc(100% - 300px - 35px);
`

const Right = styled.section`
  display: flex;
  width: 35px;
  justify-content: left;
  border: 1px solid black;
`

function App() {
  return (
    <Container>
      <Header location={useLocation().pathname} />
        <Main>
          <Left>Left Content</Left>
          <Center>
            <Routes>
              <Route path="/" element={<Loading />} />
            </Routes>
          </Center>
          <Right>PIX</Right>
        </Main>
    </Container>
  );
}

export default App;
