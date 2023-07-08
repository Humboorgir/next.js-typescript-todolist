import React, { useState, useEffect } from "react";
import TodoList from "@/components/todolist";
import AddTask from "@/components/addtask";

const Home: React.FC = () => {
  // (test data)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "test 1",
      content: "test 1 description hahahahahah",
    },
    {
      id: "2",
      title: "test 2",
      content: "test 2 description (not clickbait)",
    },
  ]);
  return (
    <div className="md:container md:mx-auto px-4 flex flex-col items-center justify-center mt-20">
      <div className="border border-neutral-300 rounded-lg p-4 text-center shadow-md">
        <h2 className="text-2xl text-slate-900">Todo list</h2>
        <p className="text-base text-slate-800">What things are you planning to do today?</p>
        <TodoList tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
};

export default Home;
