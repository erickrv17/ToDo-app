import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import TaskContext from "./context/TasksContext";

const App = () => {
  return (
    <TaskContext>
      <div className="App">
        <Home />
      </div>
    </TaskContext>
  );
};

export default App;
