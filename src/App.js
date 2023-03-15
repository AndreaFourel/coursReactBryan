import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';
import { useState } from 'react';

function App() {

  const [timers, setTimers] = useState([])

  const saveTime = (time) => {
    const date = new Date();
    setTimers([...timers, {time, date}]);
  }

  return (
    <div className={style.container}>
        <h1 className={style['main-title']}>Pomodoro Timer</h1>
        <Timer saveTime={saveTime}/>
        <TimersTable timers={timers} />
      </div>
  );

}

export default App;
