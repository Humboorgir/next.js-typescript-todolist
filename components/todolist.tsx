import React from "react";
import Task from "@/components/task";

interface Props {
  tasks: Task[];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="flex flex-col gap-2 mt-4 max-h-72 overflow-y-auto">
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </ul>
  );
};

export default TodoList;
