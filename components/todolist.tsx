import React from "react";
import Task from "@/components/task";

interface Props {
  tasks: [
    {
      id: string;
      content: string;
    }
  ];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </ul>
  );
};

export default TodoList;
