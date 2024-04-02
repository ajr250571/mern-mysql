import { pool } from "../db.js";

class Tasks {
  async view_all(req, res) {
    try {
      const [rows] = await pool.query(
        "select * from tasks order by createdAt asc"
      );
      return res.json(rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async view_one(req, res) {
    try {
      const [rows] = await pool.query("select * from tasks where id=?", [
        req.params.id,
      ]);
      if (rows.length === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const { title, description } = req.body;
      const [result] = await pool.query(
        "insert into tasks(title, description) values (?, ?)",
        [title, description]
      );
      return res.json({
        id: result.insertId,
        title,
        description,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { title, description } = req.body;
      const [result] = await pool.query("update tasks set ? where id=?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      const [rows] = await pool.query("select * from tasks where id=?", [
        req.params.id,
      ]);
      return res.json(rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const [result] = await pool.query("delete from tasks where id=?", [
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(204).json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new Tasks();
