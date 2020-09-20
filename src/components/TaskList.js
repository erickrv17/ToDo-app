import React, { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

const TaskList = () => {
  const {tasks} = useContext(TaskContext);
  return(
      <div className="tasksList">
        {tasks.map((task) => (
          <Task key={task}></Task>
        ))}
      </div>
  ) 
};

export default TaskList;
