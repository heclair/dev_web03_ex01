import express from "express";
import dotenv from "dotenv";
import conectar from "./models/connection";
import routes from "./routes";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

conectar();

app.listen(PORT, () => console.log(`Rodando na port ${PORT}...`));

app.use(routes);