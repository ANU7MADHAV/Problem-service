import express from "express";
import v1Router from "./v1/index.js";

const apiRoute = express.Router();

apiRoute.use("/v1", v1Router);

export default apiRoute;
