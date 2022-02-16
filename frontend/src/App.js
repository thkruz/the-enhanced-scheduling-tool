//import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header location={useLocation().pathname} />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
