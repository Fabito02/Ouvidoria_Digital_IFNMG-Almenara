import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Auris'
});

// Rota teste
app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT NOW() AS agora");
    res.json({ status: "ok", data: rows });
  } catch (err) {
    res.status(500).json({ error: "Erro na query", details: err });
  }
});

app.listen(port, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
