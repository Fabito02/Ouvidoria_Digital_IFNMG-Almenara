import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import db from "./db";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  db.query('SELECT 1', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao conectar no banco de dados');
    } else {
      res.send("API do Auris");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

