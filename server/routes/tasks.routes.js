import { Router } from "express";
import tasksControllers from "../controllers/tasks.controllers.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get("/tasks", tasksControllers.view_all);

routes.get("/tasks/:id", tasksControllers.view_one);

routes.post("/tasks", tasksControllers.create);

routes.put("/tasks/:id", tasksControllers.update);

routes.delete("/tasks/:id", tasksControllers.delete);

export default routes;
