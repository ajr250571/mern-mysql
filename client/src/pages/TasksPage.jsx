import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [Tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log("Task Page");
    async function loadTasks() {
      const res = await axios.get("http://localhost:4000/tasks");
      setTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <h1>Tasks</h1>
      {Tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
