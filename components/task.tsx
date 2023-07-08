import React from "react";

interface Props {
  task: {
    id: string;
    content: string;
  };
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <li className="bg-zinc-200 rounded-md py-2 px-4 text-left" key={task.id}>
      {task.content}
    </li>
  );
};

export default Task;
