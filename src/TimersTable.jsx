import { useContext } from 'react';
import ClockDisplay from './ClockDisplay';
import { TasksContext } from './contexts/Tasks';
import style from './TimersTable.module.css';

function TimersTable() {

  const { tasks, removeTask } = useContext(TasksContext);

  return(
    <table className={ style['timers-table'] }>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((timer, index)=>(
              <tr key={ timer.date.getMilliseconds() - index }>
                <td>{ timer.date.toLocaleDateString() } at { timer.date.toLocaleTimeString() }</td>
                <td>{timer.title}</td>
                <td>{timer.description}</td>
                <td>
                  <ClockDisplay time = { timer.time }/>
                </td>
                <td><button onClick={ ()=>removeTask(index) }>Delete</button></td>

              </tr>
            ))
          }
        </tbody>
      </table>
  );
}

export default TimersTable;

