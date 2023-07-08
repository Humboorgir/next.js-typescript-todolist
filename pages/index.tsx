import React, { useState, useEffect } from "react";
import TodoList from "../components/todolist";

const Home: React.FC = () => {
  // (test data)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: "test 1",
    },
    {
      id: "2",
      content: "test 2",
    },
  ]);
  return (
    <div className="md:container md:mx-auto px-4 flex flex-col items-center justify-center mt-20">
      <form className="border border-neutral-700 rounded-lg p-4 text-center">
        <h2 className="text-2xl text-slate-900">Todo list</h2>
        <p className="text-base text-slate-700">What things are you planning to do today?</p>
        <TodoList tasks={tasks} />
      </form>
    </div>
  );
};

export default Home;
