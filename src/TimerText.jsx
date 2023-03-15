import { memo, useRef, useEffect } from 'react';

function TimerText({isTimerStarted}) {

  const textRef = useRef(null);

  //pour pouvoir observer ce que fait useRef
  useEffect(() => {
    textRef.current.classList='class-pour-exemple'
    console.log(textRef.current.innerText);
  }, [])

  return (
    <p ref={ textRef }>
    {console.log('RENDER >>> P')}
    {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
  </p>
  )
}

export default memo(TimerText);