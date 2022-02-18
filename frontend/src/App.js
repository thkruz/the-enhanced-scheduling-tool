import styled from 'styled-components';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Loading from './components/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem;
  border-radius: 10px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  background: #F5F9FB;
`

const Navigation = styled(Container)`
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 1rem;
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
`

const Center = styled.section`
  display: flex;
  justify-content: center;
  width: calc(100% - 300px - 35px);
  border-left: 1px solid #cbd6db;
  border-right: 1px solid #cbd6db;
`

const Right = styled.section`
  display: flex;
  width: 35px;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <Navigation>
        <Header location={useLocation().pathname} />
      </Navigation>
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
