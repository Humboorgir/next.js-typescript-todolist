import React from "react";

import TodoList from "../components/todolist";

const Home: React.FC = () => {
  return (
    <div className="md:container md:mx-auto px-4 flex flex-col items-center justify-center mt-20">
      <form className="border border-neutral-700 rounded-lg p-4 text-center">
        <h2 className="text-2xl text-slate-900">Todo list</h2>
        <p className="text-base text-slate-700">What things are you planning to do today?</p>
        <TodoList />
      </form>
    </div>
  );
};

export default Home;
