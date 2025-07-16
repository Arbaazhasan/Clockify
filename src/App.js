import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock.jsx';
import Calender from './components/Calender/Calender.jsx';
import Header from './components/header/Header.jsx';
import { useContext, useEffect } from 'react';
import { Context } from './components/Context/UseContext.js';

function App() {

  const { currentTab, setCurrentTab } = useContext(Context);



  useEffect(() => {
    console.log(currentTab)
  })


  return (
    <div className="App">
      <Header />
      {
        currentTab[0] === true && <DigitalClock />
      }

      {

        currentTab[1] === true && <Calender />
      }
      {

        currentTab[2] === true && <DigitalClock />
      }

      <newf />
    </div>
  );
}

export default App;
