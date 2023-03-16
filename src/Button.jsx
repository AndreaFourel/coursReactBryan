import style from './Button.module.css';

function Button({ isTimerStarted, onClick, type = 'button' }) {

  return (
    <button 
        className={`${style['clock-btn']} ${style[`clock-btn-${ isTimerStarted ? 'stop' : 'start' }`]}`} 
        onClick={ onClick }
        type={ type }
    >
      {isTimerStarted ? 'Stop' : 'Start'}
    </button>
  );

}

export default Button;