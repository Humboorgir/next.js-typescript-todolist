import React, { useRef } from "react";

type Tasks = Task[];

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
}
const AddTask: React.FC<Props> = ({ setTasks }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler} className="w-full mt-4 flex flex-nowrap">
      <input
        className="h-12 border border-neutral-300 rounded-l-lg px-4 outline-neutral-300"
        name="content"
        placeholder="Task"
        ref={inputRef}
      />
      <button className="bg-blue-500 text-white h-12 p-3 rounded-r-lg" type="submit">
        Add task
      </button>
    </form>
  );

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!inputRef.current?.value) return;

    type Task = {
      id: string;
      content: string;
    };

    const taskRequest = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content: inputRef.current.value }),
    });
    if (taskRequest.status !== 200) return;
    const addedTask: Task = await taskRequest.json();

    inputRef.current.value = "";
    setTasks((prevTasks) => [...prevTasks, addedTask]);
  }
};

export default AddTask;
