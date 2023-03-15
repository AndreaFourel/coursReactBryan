import ClockDisplay from './ClockDisplay';
import style from './Timer.module.css';
import { useState } from 'react';

let timerId;

function Timer(props) {

  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [time, setTime] = useState(0);
  
  const handleStartTimer = () => {

    if(isTimerStarted) {

      clearInterval(timerId);

      props.saveTime(time);

      setIsTimerStarted(false);

      setTime(0);

    } else {

      setIsTimerStarted(true);

      timerId = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        })
      }, 1000);

    }
  }

  return (
    <>
      <ClockDisplay time={time} className={style['clock-timer']}/>
      <button 
        className={`${style['clock-btn']} ${style[`clock-btn-${ isTimerStarted ? 'stop' : 'start' }`]}`} 
        onClick={handleStartTimer}>{isTimerStarted ? 'Stop' : 'Start'}
      </button>
    </>
  )
} 

export default Timer;