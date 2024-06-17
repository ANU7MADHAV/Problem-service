import express from "express";
import problem from "../../controllers/index.js";

const problemRouter = express.Router();

problemRouter.get("/ping", problem.pingProblemController);

problemRouter.get("/:id", problem.getProblem);

problemRouter.get("/:id", problem.getProblems);

problemRouter.post("/:id", problem.addProblem);

problemRouter.delete("/:id",problem.deleteProblem)


export default problemRouter;
