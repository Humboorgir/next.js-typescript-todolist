const AddTask = () => {
  return (
    <form onSubmit={submitHandler} className="w-full mt-4 flex flex-nowrap">
      <input
        className="h-12 border border-neutral-300 rounded-l-lg px-4 outline-neutral-300"
        name="task"
        placeholder="Task"
      />
      <button className="bg-blue-500 text-white h-12 p-3 rounded-r-lg" type="submit">
        Add task
      </button>
    </form>
  );

  function submitHandler(e) {
    e.preventDefault();
    return;
  }
};

export default AddTask;
