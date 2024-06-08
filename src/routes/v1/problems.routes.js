import express from "express";
import problem from "../../controllers/index.js";

const problemRouter = express.Router();

problemRouter.get("/ping", problem.pingProblemController);
problemRouter.get("/:id", problem.getProblem);

export default problemRouter;
