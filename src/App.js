import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';
import { useContext } from 'react';
import { ThemeContext } from './contexts/Theme';

function App() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <div className={`${style.container} ${style[theme]}`}>
        <h1 className={style['main-title']}>Pomodoro Timer</h1>
        <button onClick={ toggleTheme }>Toggle to {theme === 'light' ? 'dark' : 'light'}</button>
        <Timer/>
        <TimersTable />
      </div>
  );

}

export default App;
