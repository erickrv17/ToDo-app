import React, { useState, useEffect} from "react";
import Task from "../components/Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    tasks.forEach(element => {
      setTasks(element);
    });
  }

  return(
      <div className="tasksList">
        {tasks.map((task) => (
          <Task name={task.name} />
        ))}
      </div>
  ) 
};

export default TaskList;
