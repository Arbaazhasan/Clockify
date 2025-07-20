import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock.jsx';
import Calender from './components/Calender/Calender.jsx';
import Header from './components/header/Header.jsx';
import { useContext, useEffect } from 'react';
import { Context } from './components/Context/UseContext.js';
import StopWatch from './components/StopWatch/StopWatch.jsx';

function App() {

  const { currentTab, setCurrentTab } = useContext(Context);

  return (
    <div className="App">
      <Header />
      {
        currentTab[0] === true && <DigitalClock />
      }

      {
        currentTab[1] === true && <StopWatch />
      }
      {

        currentTab[2] === true && <Calender />
      }
    </div>
  );
}

export default App;
