import React from "react";

interface Props {
  task: {
    id: string;
    title: string;
    content: string;
  };
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <li className="bg-zinc-200 rounded-md py-2 px-4 text-left" key={task.id}>
      <h4 className="text-lg text-slate-800">{task.title}</h4>
      <p className="text-sm text-slate-700">{task.content}</p>
    </li>
  );
};

export default Task;
