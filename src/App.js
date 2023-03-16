import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';
import { useState } from 'react';

function App() {

  const [timers, setTimers] = useState([])

  const saveTime = (time, title, description) => {
    const date = new Date();
    setTimers([...timers, {time, date, title, description}]);
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
