import { createContext, useState } from "react";

const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

export { TasksContext };

const TasksContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const removeTask =  (taskTndex) => {
    const tasksArr = [...tasks];
    tasksArr.splice(taskTndex, 1);
    setTasks(tasksArr);
  }


  const value = {
    tasks,
    addTask,
    removeTask,
  };

  return (
    <TasksContext.Provider value={value}>
      { children }
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;