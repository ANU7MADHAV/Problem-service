import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/config.server.js";
import apiRoute from "./routes/index.js";
import errorHandler from "./utils/errorHandler.js";
import connectDB from "./config/db.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRoute);

app.get("/ping", (req, res) => {
  res.json({ message: "Server start alive" });
});

app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`Server started ${PORT}`);
  connectDB();
  console.log("Connected db");
});
