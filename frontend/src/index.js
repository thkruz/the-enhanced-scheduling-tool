import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { SchedulerContext } from './SchedulerContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SchedulerContext.Provider value={{roster: {}, calendar: {}, counter: 0}}>
       <App />
      </SchedulerContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
