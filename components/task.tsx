import React from "react";

interface Props {
  task: {
    id: string;
    content: string;
  };
}

const Task: React.FC<Props> = ({ task }) => {
  return <li key={task.id}>{task.content}</li>;
};

export default Task;
