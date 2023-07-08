import React from "react";
import Task from "@/components/task";

interface Props {
  tasks: {
    id: string;
    title: string;
    content: string;
  }[];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </ul>
  );
};

export default TodoList;
