import mysql from "mysql2/promise";

// Create the connection to database
export const pool = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mern-db",
});
