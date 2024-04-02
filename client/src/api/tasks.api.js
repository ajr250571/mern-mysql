import axios from "axios";

export const createTask = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export const getTasks = async () => {
  return await axios.get("http://localhost:4000/tasks");
};

export const deleteTasks = async (id) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
};
