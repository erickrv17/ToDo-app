import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [query, setQuery] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      setTasks(tasks);
    };
    getTasks();
  }, [query]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        newTask,
        setNewTask,
        setQuery
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
