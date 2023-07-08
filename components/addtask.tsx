import React from "react";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<never[]>>;
}
const AddTask: React.FC<Props> = ({ setTasks }) => {
  return (
    <form onSubmit={submitHandler} className="w-full mt-4 flex flex-nowrap">
      <input
        className="h-12 border border-neutral-300 rounded-l-lg px-4 outline-neutral-300"
        name="content"
        placeholder="Task"
      />
      <button className="bg-blue-500 text-white h-12 p-3 rounded-r-lg" type="submit">
        Add task
      </button>
    </form>
  );

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!e.target.content.value) return;

    type Task = {
      id: string;
      content: string;
    };

    const taskRequest = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content: e.target.content.value }),
    });
    if (taskRequest.status !== 200) return;
    const task: Task = await taskRequest.json();

    e.target.content.value = "";
    return setTasks((tasks) => [...tasks, task]);
  }
};

export default AddTask;
