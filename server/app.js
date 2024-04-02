import express from "express";
import cors from "cors";

//import routes from './routes';
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(indexRoutes);
    this.server.use(taskRoutes);
  }
}

export default new App().server;
