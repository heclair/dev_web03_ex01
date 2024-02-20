import express from "express";
import dotenv from "dotenv";
import conectar from "./models/connection";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

conectar();

app.listen(PORT, () => console.log(`Rodando na port ${PORT}...`));
