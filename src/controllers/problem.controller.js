import { StatusCodes } from "http-status-codes";
import ProblemService from "../services/problem.service.js";
import ProblemRepository from "../repositories/problem.repository.js";

export const pingProblemController = (req, res) => {
  res.json({ message: "pingcontroller server alive" });
};

const problemService = new ProblemService(new ProblemRepository());

export const addProblem = async (req, res, next) => {
  try {
    const createProblem = await problemService.createProblem(req.body);
    // if (!createProblem) {
    //   return res.status(StatusCodes.NOT_ACCEPTABLE).send("failed to create");
    // }
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created a problem",
      data: createProblem,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getProblem = async (req, res, next) => {
  console.log("hello");
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
};

export const getProblems = async (req, res, next) => {
  try {
    const problems = await problemService.getProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched  problems",
      data: problems,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteProblem = async (req, res, next) => {
  try {
    const problem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully deleted a problem",
      data: problem,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateProblem = async (req, res, next) => {
  try {
    console.log("params", req.params.id);
    const updateProblem = await problemService.updateProblem(
      req.params.id,
      req.body
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: updateProblem,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
