import express from "express";
import problem from "../../controllers/index.js";

const problemRouter = express.Router();

problemRouter.get("/ping", problem.pingProblemController);

problemRouter.get("/", problem.getProblem);

problemRouter.get("/:id", problem.getProblem);

problemRouter.post("/create", problem.addProblem);

problemRouter.put("/:id", problem.updateProblem);

problemRouter.delete("/:id", problem.deleteProblem);

export default problemRouter;
