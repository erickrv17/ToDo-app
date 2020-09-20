import React, { useContext } from "react";
import { TaskContext } from "../context/TasksContext";
import "../App.css";

const Form = () => {
  const { newTask, setNewTask, setQuery } = useContext(TaskContext);
  
  const addTask = (e) => {
    setNewTask(e.target.value);
  };

  const getNewTask = (e) => {
    e.preventDefault();
    setQuery(newTask);
    setNewTask("");
  };

  return (
    <>
      <form id="toDo-form" onSubmit={getNewTask}>
        <input type="text" placeholder="Enter new task!" value={newTask} onChange={addTask}></input>
        <button type="submit">
          <span class="ec ec-white-check-mark"></span>
        </button>
      </form>
    </>
  );
};

export default Form;
