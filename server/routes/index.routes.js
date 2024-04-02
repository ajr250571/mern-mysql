import { Router } from "express";
import { pool } from "../db.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get("/ping", async (req, res) => {
  const [rows, fields] = await pool.query("select 1 + 1 as result");
  console.log(rows);
  res.json(rows);
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes;
