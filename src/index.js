import express from "express";
import bodyParser from "body-parser";
import { port } from "./config/config.server.js";
import apiRoute from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRoute);

app.get("/ping", (req, res) => {
  res.json({ message: "Server start alive" });
});

app.listen(port, (req, res) => {
  console.log(`Server started ${port}`);
});
