import { deleteTasks } from "../api/tasks.api";

/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const res = await deleteTasks(id);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card w-80 bg-base-300 shadow-xl card-compact m-2">
      <div className="card-body">
        <h2 className="card-title">{task.title}</h2>
        <p>{task.description}</p>
        <div className="flex justify-between gap-2">
          <span>{task.done ? "✔️" : "❌"}</span>
          <span>{task.createdAt}</span>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => handleDelete(task.id)}
            className="btn btn-error btn-xs"
          >
            🗑️ Delete
          </button>
          <button className="btn btn-primary btn-xs">✏️ Edit</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
