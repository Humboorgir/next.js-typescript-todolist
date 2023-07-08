import React, { useState, useEffect } from "react";
import TodoList from "@/components/todolist";
import AddTask from "@/components/addtask";

const Home: React.FC = () => {
  // (test data)
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/api/tasks", {
      method: "GET",
    })
      .then((tasks) => tasks.json())
      .then((tasks) => {
        setTasks(tasks);
      });
    console.log(tasks);
  }, []);
  return (
    <div className="md:container md:mx-auto px-4 flex flex-col items-center justify-center mt-20">
      <div className="border border-neutral-300 rounded-lg p-4 text-center shadow-md">
        <h2 className="text-2xl text-slate-900">Todo list</h2>
        <p className="text-base text-slate-800">What things are you planning to do today?</p>
        <TodoList tasks={tasks} />
        <AddTask setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Home;
