import React from "react";
import Form from "../components/Form";
import TaskList from "../components/TaskList";
import '../App.css';

const Home = () => {
  return (
    <>
      <header>
        <Form />
      </header>
      <body>
        <TaskList />
      </body>
    </>
  );
};

export default Home;
