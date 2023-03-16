import ClockDisplay from './ClockDisplay';
import style from './Timer.module.css';
import { useState } from 'react';
import TimerText from './TimerText';
import useTimer from './hooks/useTimer';
import TaskForm from './TaskForm';


function Timer(props) {

  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const { time, startTimer, stopTimer } = useTimer();
  
  const handleStartTimer = ({title, description}) => {
    if(isTimerStarted) {
      const savedTime = stopTimer();
      props.saveTime(savedTime, title, description);
      setIsTimerStarted(false);    
    } else {
      setIsTimerStarted(true);
      startTimer();
    }
  }

  // const displayParagraph = useMemo(() => {
  //   return (
  //     <p>
  //     {console.log('RENDER >>> P')}
  //     {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
  //   </p>
  //   )
  // }, [ isTimerStarted ]);


  // const handleClick = () => {
  //   alert('Hey yall!');
  // }

  return (
    <>
      <ClockDisplay 
        time={time} 
        className={style['clock-timer']}
      />
      <TaskForm isTimerStarted={ isTimerStarted } onSubmit={handleStartTimer}/>
      {/** {displayParagraph}*/}
      {/**on peut utiliser memo sur des composant également */}
      <TimerText isTimeStarted={ isTimerStarted }/>
    </>
  )
} 

export default Timer;