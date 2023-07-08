import React from "react";

interface Props {
  task: {
    id: string;
    content: string;
  };
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <li className="bg-zinc-200 rounded-md p-4 text-left text-slate-900 text-base" key={task.id}>
      {task.content}
    </li>
  );
};

export default Task;
